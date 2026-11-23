<?php
/**
 * Wysyłka formularzy DroBud: wycena (z załącznikami), rezerwacja, kontakt.
 * Wymaga hostingu z PHP i działającą funkcją mail().
 */

// ---- KONFIGURACJA (uzupełnić przed wdrożeniem) ----
const MAIL_TO      = 'drosinski96@wp.pl';          // TODO: docelowy adres na zgłoszenia
const MAIL_FROM    = 'formularz@drobud-wielun.pl'; // TODO: adres w domenie strony (SPF!)
const ALLOWED_HOST = '';                           // np. 'drobud-wielun.pl' — puste = bez sprawdzania
const MAX_FILES    = 8;
const MAX_FILE     = 10 * 1024 * 1024;
const MAX_TOTAL    = 25 * 1024 * 1024;
const ALLOWED_EXT  = ['jpg', 'jpeg', 'png', 'webp', 'heic', 'pdf', 'doc', 'docx'];
// ---------------------------------------------------

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

function field(string $name, int $max = 200): string {
    $value = trim((string)($_POST[$name] ?? ''));
    $value = str_replace(["\r", "\0"], '', $value);
    return mb_substr($value, 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Niedozwolona metoda.']);
}

if (ALLOWED_HOST !== '') {
    $origin = parse_url($_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '', PHP_URL_HOST);
    if ($origin !== ALLOWED_HOST && $origin !== 'www.' . ALLOWED_HOST) {
        respond(403, ['ok' => false, 'error' => 'Niedozwolone źródło.']);
    }
}

// Pułapka na boty: udajemy sukces.
if (field('website') !== '') {
    respond(200, ['ok' => true]);
}

$types = ['wycena' => 'Wycena', 'rezerwacja' => 'Rezerwacja', 'kontakt' => 'Kontakt', 'praca' => 'Zgłoszenie do pracy'];
$type = field('typ', 20);
if (!isset($types[$type])) {
    respond(400, ['ok' => false, 'error' => 'Nieznany formularz.']);
}

$name  = field('imie');
$phone = field('telefon', 20);
$email = field('email');
$city  = field('miejscowosc');
$desc  = field('opis', 5000);

if ($name === '' || !preg_match('/^[0-9 +\-]{9,16}$/', $phone)) {
    respond(400, ['ok' => false, 'error' => 'Podaj imię i poprawny numer telefonu.']);
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['ok' => false, 'error' => 'Niepoprawny adres e-mail.']);
}
if (field('zgoda', 5) !== 'tak') {
    respond(400, ['ok' => false, 'error' => 'Wymagana jest zgoda na przetwarzanie danych.']);
}
if (($type === 'wycena' || $type === 'kontakt') && $desc === '') {
    respond(400, ['ok' => false, 'error' => 'Opisz, czego dotyczy zgłoszenie.']);
}

$lines = [
    'Formularz' => $types[$type],
    'Imię i nazwisko' => $name,
    'Telefon' => $phone,
    'E-mail' => $email,
    'Miejscowość' => $city,
    'Usługa' => field('usluga'),
    'Metraż (m2)' => field('metraz', 6),
    'Rodzaj sprzątania' => field('rodzaj_sprzatania'),
    'Stanowisko' => field('stanowisko'),
    'Doświadczenie' => field('doswiadczenie'),
];

if ($type === 'rezerwacja') {
    $from = field('termin_od', 10);
    $to   = field('termin_do', 10);
    $date = '/^\d{4}-\d{2}-\d{2}$/';
    if (!preg_match($date, $from) || ($to !== '' && !preg_match($date, $to))) {
        respond(400, ['ok' => false, 'error' => 'Wybierz termin w kalendarzu.']);
    }
    $lines['Termin od'] = $from;
    $lines['Termin do'] = $to !== '' ? $to : $from;
    $lines['Liczba osuszaczy'] = field('ilosc', 3);
}

$lines['Opis'] = "\n" . $desc;

$text = '';
foreach ($lines as $label => $value) {
    if (trim($value) !== '') {
        $text .= $label . ': ' . $value . "\n";
    }
}

// ---- Załączniki ----
$attachments = [];
if (!empty($_FILES['pliki']['name'][0])) {
    $files = $_FILES['pliki'];
    $count = count($files['name']);
    if ($count > MAX_FILES) {
        respond(400, ['ok' => false, 'error' => 'Za dużo plików (maksymalnie ' . MAX_FILES . ').']);
    }
    $total = 0;
    for ($i = 0; $i < $count; $i++) {
        if ($files['error'][$i] !== UPLOAD_ERR_OK || !is_uploaded_file($files['tmp_name'][$i])) {
            respond(400, ['ok' => false, 'error' => 'Nie udało się wgrać pliku. Sprawdź jego rozmiar.']);
        }
        $ext = strtolower(pathinfo($files['name'][$i], PATHINFO_EXTENSION));
        if (!in_array($ext, ALLOWED_EXT, true)) {
            respond(400, ['ok' => false, 'error' => 'Niedozwolony format pliku.']);
        }
        $size = (int)$files['size'][$i];
        $total += $size;
        if ($size > MAX_FILE || $total > MAX_TOTAL) {
            respond(400, ['ok' => false, 'error' => 'Pliki są zbyt duże.']);
        }
        $attachments[] = [
            'name' => 'zalacznik-' . ($i + 1) . '.' . $ext,
            'data' => file_get_contents($files['tmp_name'][$i]),
        ];
    }
}

// ---- Wiadomość ----
$subject  = '=?UTF-8?B?' . base64_encode('[DroBud] ' . $types[$type] . ' — ' . $name) . '?=';
$boundary = 'drobud-' . bin2hex(random_bytes(12));

$headers  = 'From: DroBud formularz <' . MAIL_FROM . ">\r\n";
if ($email !== '') {
    $headers .= 'Reply-To: ' . $email . "\r\n";
}
$headers .= "MIME-Version: 1.0\r\n";
$headers .= 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';

$body  = '--' . $boundary . "\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n\r\n";
$body .= chunk_split(base64_encode($text)) . "\r\n";

foreach ($attachments as $file) {
    $body .= '--' . $boundary . "\r\n";
    $body .= 'Content-Type: application/octet-stream; name="' . $file['name'] . "\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= 'Content-Disposition: attachment; filename="' . $file['name'] . "\"\r\n\r\n";
    $body .= chunk_split(base64_encode($file['data'])) . "\r\n";
}
$body .= '--' . $boundary . '--';

if (!mail(MAIL_TO, $subject, $body, $headers)) {
    respond(500, ['ok' => false, 'error' => 'Nie udało się wysłać wiadomości.']);
}

respond(200, ['ok' => true]);
