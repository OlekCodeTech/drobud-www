"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/content";

import { asset } from "@/lib/asset";

const ENDPOINT = asset("/api/send.php");
const MAX_FILES = 8;
const MAX_FILE_MB = 10;

type Status = { state: "idle" | "sending" | "ok" | "error"; message?: string };

export function useSubmit() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function submit(data: FormData) {
    setStatus({ state: "sending" });
    try {
      const res = await fetch(ENDPOINT, { method: "POST", body: data });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.ok) throw new Error(json?.error || "Nie udało się wysłać formularza.");
      setStatus({ state: "ok" });
    } catch (e) {
      setStatus({
        state: "error",
        message: `${e instanceof Error ? e.message : "Błąd wysyłki."} Zadzwoń: ${site.phone}.`,
      });
    }
  }

  return { status, submit };
}

export function FormStatus({ status, okText }: { status: Status; okText: string }) {
  if (status.state === "ok") {
    return (
      <p role="status" className="rounded-xl bg-green-50 p-4 font-bold text-green-800">
        {okText}
      </p>
    );
  }
  if (status.state === "error") {
    return (
      <p role="alert" className="rounded-xl bg-red-50 p-4 font-bold text-red-800">
        {status.message}
      </p>
    );
  }
  return null;
}

export function Consent() {
  return (
    <label className="flex gap-3 text-sm text-muted">
      <input type="checkbox" name="zgoda" value="tak" required className="mt-1 h-4 w-4 shrink-0" />
      <span>
        Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na zgłoszenie. Szczegóły w{" "}
        <Link href="/polityka-prywatnosci/" className="underline">
          polityce prywatności
        </Link>
        .
      </span>
    </label>
  );
}

/** Pole-pułapka na boty. Niewidoczne dla ludzi i czytników ekranu. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px]">
      <label>
        Strona www
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function ContactFields({ emailRequired = false }: { emailRequired?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className="label" htmlFor="imie">
          Imię i nazwisko
        </label>
        <input id="imie" name="imie" required autoComplete="name" className="field" />
      </div>
      <div>
        <label className="label" htmlFor="telefon">
          Numer telefonu
        </label>
        <input
          id="telefon"
          name="telefon"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9 +\-]{9,16}"
          title="Podaj numer telefonu, np. 600 100 200"
          className="field"
        />
      </div>
      <div>
        <label className="label" htmlFor="email">
          E-mail {!emailRequired && <span className="font-normal text-muted">(opcjonalnie)</span>}
        </label>
        <input id="email" name="email" type="email" required={emailRequired} autoComplete="email" className="field" />
      </div>
      <div>
        <label className="label" htmlFor="miejscowosc">
          Miejscowość
        </label>
        <input id="miejscowosc" name="miejscowosc" required list="miasta" className="field" />
        <datalist id="miasta">
          {cities.map((c) => (
            <option key={c.slug} value={c.name} />
          ))}
        </datalist>
      </div>
    </div>
  );
}

export function QuoteForm() {
  const { status, submit } = useSubmit();
  const [fileError, setFileError] = useState("");
  const [fileNames, setFileNames] = useState<string[]>([]);

  function onFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    const tooBig = files.find((f) => f.size > MAX_FILE_MB * 1024 * 1024);
    if (files.length > MAX_FILES) setFileError(`Możesz dodać maksymalnie ${MAX_FILES} plików.`);
    else if (tooBig) setFileError(`Plik „${tooBig.name}” przekracza ${MAX_FILE_MB} MB.`);
    else setFileError("");
    setFileNames(files.map((f) => f.name));
  }

  if (status.state === "ok") {
    return <FormStatus status={status} okText="Dziękujemy! Zgłoszenie dotarło. Oddzwonimy, żeby omówić szczegóły." />;
  }

  return (
    <form
      className="relative space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (fileError) return;
        submit(new FormData(e.currentTarget));
      }}
    >
      <input type="hidden" name="typ" value="wycena" />
      <Honeypot />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="usluga">
            Rodzaj prac
          </label>
          <select id="usluga" name="usluga" required defaultValue="" className="field">
            <option value="" disabled>
              Wybierz…
            </option>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Inne</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="metraz">
            Metraż <span className="font-normal text-muted">(m², opcjonalnie)</span>
          </label>
          <input id="metraz" name="metraz" type="number" min={1} max={2000} inputMode="numeric" className="field" />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="opis">
          Co chcesz zrobić?
        </label>
        <textarea
          id="opis"
          name="opis"
          required
          rows={6}
          placeholder="Opisz zakres prac, stan lokalu, oczekiwany termin…"
          className="field"
        />
      </div>

      <div>
        <label className="label" htmlFor="pliki">
          Projekt i zdjęcia <span className="font-normal text-muted">(opcjonalnie)</span>
        </label>
        <input
          id="pliki"
          name="pliki[]"
          type="file"
          multiple
          accept=".jpg,.jpeg,.png,.webp,.heic,.pdf"
          onChange={onFiles}
          aria-describedby="pliki-opis"
          className="field file:mr-4 file:rounded-full file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-bold file:text-white"
        />
        <p id="pliki-opis" className="mt-1.5 text-sm text-muted">
          Do {MAX_FILES} plików, każdy do {MAX_FILE_MB} MB. Formaty: JPG, PNG, WEBP, HEIC, PDF.
        </p>
        {fileNames.length > 0 && !fileError && (
          <p className="mt-1 text-sm">Wybrano: {fileNames.join(", ")}</p>
        )}
        {fileError && (
          <p role="alert" className="mt-1 text-sm font-bold text-red-700">
            {fileError}
          </p>
        )}
      </div>

      <ContactFields />
      <Consent />
      <FormStatus status={status} okText="" />

      <button type="submit" disabled={status.state === "sending"} className="btn-primary disabled:opacity-60">
        {status.state === "sending" ? "Wysyłanie…" : "Wyślij do wyceny"}
      </button>
    </form>
  );
}

export function ContactForm() {
  const { status, submit } = useSubmit();

  if (status.state === "ok") {
    return <FormStatus status={status} okText="Dziękujemy! Wiadomość dotarła. Odezwiemy się." />;
  }

  return (
    <form
      className="relative space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        submit(new FormData(e.currentTarget));
      }}
    >
      <input type="hidden" name="typ" value="kontakt" />
      <Honeypot />
      <ContactFields />
      <div>
        <label className="label" htmlFor="opis">
          Wiadomość
        </label>
        <textarea id="opis" name="opis" required rows={5} className="field" />
      </div>
      <Consent />
      <FormStatus status={status} okText="" />
      <button type="submit" disabled={status.state === "sending"} className="btn-primary disabled:opacity-60">
        {status.state === "sending" ? "Wysyłanie…" : "Wyślij wiadomość"}
      </button>
    </form>
  );
}

const CV_ACCEPT = ".pdf,.doc,.docx,.jpg,.jpeg,.png";

export function JobForm() {
  const { status, submit } = useSubmit();
  const [fileError, setFileError] = useState("");
  const [position, setPosition] = useState("");

  // „Aplikuj na to stanowisko” przekazuje stanowisko w adresie: /praca/?stanowisko=Glazurnik#aplikuj
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("stanowisko");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- jednorazowy odczyt adresu po stronie klienta
    if (fromUrl) setPosition(fromUrl);
  }, []);

  if (status.state === "ok") {
    return <FormStatus status={status} okText="Dziękujemy! Zgłoszenie dotarło. Odezwiemy się, gdy pojawi się miejsce w ekipie." />;
  }

  return (
    <form
      className="relative space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (fileError) return;
        submit(new FormData(e.currentTarget));
      }}
    >
      <input type="hidden" name="typ" value="praca" />
      <Honeypot />
      <ContactFields />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="stanowisko">
            Stanowisko
          </label>
          <select
            id="stanowisko"
            name="stanowisko"
            required
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="field"
          >
            <option value="" disabled>
              Wybierz…
            </option>
            <option>Monter suchej zabudowy (G-K)</option>
            <option>Glazurnik</option>
            <option>Wykończenia wnętrz / gładzie i malowanie</option>
            <option>Sprzątanie</option>
            <option>Pomocnik</option>
            <option>Inne</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="doswiadczenie">
            Doświadczenie
          </label>
          <select id="doswiadczenie" name="doswiadczenie" required defaultValue="" className="field">
            <option value="" disabled>
              Wybierz…
            </option>
            <option>Bez doświadczenia</option>
            <option>Do 2 lat</option>
            <option>2–5 lat</option>
            <option>Powyżej 5 lat</option>
          </select>
        </div>
      </div>
      <div>
        <label className="label" htmlFor="opis">
          Kilka słów o sobie <span className="font-normal text-muted">(opcjonalnie)</span>
        </label>
        <textarea
          id="opis"
          name="opis"
          rows={5}
          placeholder="Czym się zajmujesz, jakie prace wykonujesz najlepiej, od kiedy możesz zacząć…"
          className="field"
        />
      </div>
      <div>
        <label className="label" htmlFor="cv">
          CV lub zdjęcia prac <span className="font-normal text-muted">(opcjonalnie)</span>
        </label>
        <input
          id="cv"
          name="pliki[]"
          type="file"
          multiple
          accept={CV_ACCEPT}
          aria-describedby="cv-opis"
          onChange={(e) => {
            const files = Array.from(e.target.files ?? []);
            const tooBig = files.find((f) => f.size > MAX_FILE_MB * 1024 * 1024);
            if (files.length > MAX_FILES) setFileError(`Możesz dodać maksymalnie ${MAX_FILES} plików.`);
            else if (tooBig) setFileError(`Plik „${tooBig.name}” przekracza ${MAX_FILE_MB} MB.`);
            else setFileError("");
          }}
          className="field file:mr-4 file:rounded-full file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-bold file:text-white"
        />
        <p id="cv-opis" className="mt-1.5 text-sm text-muted">
          PDF, DOC, DOCX lub zdjęcia, każdy plik do {MAX_FILE_MB} MB.
        </p>
        {fileError && (
          <p role="alert" className="mt-1 text-sm font-bold text-red-700">
            {fileError}
          </p>
        )}
      </div>
      <label className="flex gap-3 text-sm text-muted">
        <input type="checkbox" name="zgoda" value="tak" required className="mt-1 h-4 w-4 shrink-0" />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji. Szczegóły w{" "}
          <Link href="/polityka-prywatnosci/" className="underline">
            polityce prywatności
          </Link>
          .
        </span>
      </label>
      <FormStatus status={status} okText="" />
      <button type="submit" disabled={status.state === "sending"} className="btn-primary disabled:opacity-60">
        {status.state === "sending" ? "Wysyłanie…" : "Wyślij zgłoszenie"}
      </button>
    </form>
  );
}
