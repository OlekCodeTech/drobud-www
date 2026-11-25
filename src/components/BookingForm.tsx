"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Consent, ContactFields, FormStatus, Honeypot, useSubmit } from "@/components/forms";

type Kind = "osuszacze" | "sprzatanie" | "wykonczenie";

const WEEKDAYS = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];
const MONTHS = [
  "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
  "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
];

const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const pretty = (s: string) => s.split("-").reverse().join(".");

/**
 * Kalendarz wyboru terminu. mode="range" — zakres dat (osuszacze), mode="single" — jeden dzień.
 * Nie pokazuje zajętości: rezerwacja jest wstępna i wymaga potwierdzenia przez firmę.
 */
function Calendar({
  mode,
  from,
  to,
  onChange,
}: {
  mode: "range" | "single";
  from: string;
  to: string;
  onChange: (from: string, to: string) => void;
}) {
  const [today] = useState(() => iso(new Date()));
  const [view, setView] = useState(() => {
    const now = new Date();
    return { y: now.getFullYear(), m: now.getMonth() };
  });

  const first = new Date(view.y, view.m, 1);
  const offset = (first.getDay() + 6) % 7; // poniedziałek jako pierwszy dzień
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
  const cells: (string | null)[] = [
    ...Array<null>(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => iso(new Date(view.y, view.m, i + 1))),
  ];
  const isCurrentMonth = iso(first).slice(0, 7) === today.slice(0, 7);

  function pick(day: string) {
    if (mode === "single") return onChange(day, day);
    if (!from || (from && to) || day < from) return onChange(day, "");
    onChange(from, day);
  }

  function shift(delta: number) {
    const d = new Date(view.y, view.m + delta, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => shift(-1)}
          disabled={isCurrentMonth}
          aria-label="Poprzedni miesiąc"
          className="h-10 w-10 rounded-full border border-line font-bold disabled:opacity-30"
        >
          ‹
        </button>
        <p aria-live="polite" className="font-extrabold">
          {MONTHS[view.m]} {view.y}
        </p>
        <button
          type="button"
          onClick={() => shift(1)}
          aria-label="Następny miesiąc"
          className="h-10 w-10 rounded-full border border-line font-bold"
        >
          ›
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((w) => (
          <span key={w} className="py-1 text-xs font-bold text-muted">
            {w}
          </span>
        ))}
        {cells.map((day, i) => {
          if (!day) return <span key={`e${i}`} />;
          const past = day < today;
          const edge = day === from || day === to;
          const inside = Boolean(from && to && day > from && day < to);
          return (
            <button
              key={day}
              type="button"
              disabled={past}
              aria-pressed={edge || inside}
              aria-label={pretty(day)}
              onClick={() => pick(day)}
              className={`aspect-square rounded-lg text-sm font-bold ${
                edge
                  ? "bg-ink text-white"
                  : inside
                    ? "bg-accent/30"
                    : past
                      ? "text-muted/40"
                      : "hover:bg-paper"
              }`}
            >
              {Number(day.slice(8))}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function BookingForm() {
  const params = useSearchParams();
  const fromUrl = params.get("usluga");
  const initial: Kind = fromUrl === "sprzatanie" || fromUrl === "wykonczenie" ? fromUrl : "osuszacze";
  const [kind, setKind] = useState<Kind>(initial);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [dateError, setDateError] = useState("");
  const { status, submit } = useSubmit();

  const range = kind === "osuszacze";
  const complete = range ? Boolean(from && to) : Boolean(from);

  if (status.state === "ok") {
    return (
      <FormStatus
        status={status}
        okText="Dziękujemy! Zgłoszenie dotarło. Zadzwonimy, żeby potwierdzić termin."
      />
    );
  }

  return (
    <form
      className="relative space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (!complete) {
          setDateError(range ? "Wybierz w kalendarzu dzień początku i końca wynajmu." : "Wybierz dzień w kalendarzu.");
          return;
        }
        submit(new FormData(e.currentTarget));
      }}
    >
      <input type="hidden" name="typ" value="rezerwacja" />
      <input
        type="hidden"
        name="usluga"
        value={range ? "Wynajem osuszaczy" : kind === "sprzatanie" ? "Sprzątanie" : "Termin wykończenia"}
      />
      <input type="hidden" name="termin_od" value={from} />
      <input type="hidden" name="termin_do" value={to} />
      <Honeypot />

      <fieldset>
        <legend className="label">Co rezerwujesz?</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {(
            [
              ["wykonczenie", "Termin wykończenia", "Zapytaj o dowolny termin rozpoczęcia prac"],
              ["osuszacze", "Wynajem osuszaczy", "Wybierz zakres dat"],
              ["sprzatanie", "Sprzątanie", "Po wykończeniu, przy wynajmie, przed świętami"],
            ] as const
          ).map(([value, label, hint]) => (
            <label
              key={value}
              className={`cursor-pointer rounded-2xl border p-4 ${kind === value ? "border-ink bg-paper" : "border-line"}`}
            >
              <input
                type="radio"
                name="rodzaj"
                value={value}
                checked={kind === value}
                onChange={() => {
                  setKind(value);
                  setFrom("");
                  setTo("");
                  setDateError("");
                }}
                className="sr-only"
              />
              <span className="block font-extrabold">{label}</span>
              <span className="text-sm text-muted">{hint}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p className="label">
            {range ? "Termin wynajmu" : kind === "sprzatanie" ? "Termin sprzątania" : "Preferowany termin rozpoczęcia prac"}
          </p>
          <Calendar
            mode={range ? "range" : "single"}
            from={from}
            to={to}
            onChange={(f, t) => {
              setFrom(f);
              setTo(t);
              setDateError("");
            }}
          />
          <p aria-live="polite" className="mt-2 text-sm">
            {!from && "Nie wybrano terminu."}
            {from && range && !to && `Od ${pretty(from)} — wybierz dzień zwrotu.`}
            {from && range && to && `Wybrano: ${pretty(from)} – ${pretty(to)}`}
            {from && !range && `Wybrano: ${pretty(from)}`}
          </p>
          {dateError && (
            <p role="alert" className="mt-1 text-sm font-bold text-red-700">
              {dateError}
            </p>
          )}
        </div>

        <div className="space-y-5">
          {range ? (
            <div>
              <label className="label" htmlFor="ilosc">
                Liczba osuszaczy
              </label>
              {/* TODO: maksymalna liczba = liczba urządzeń w ofercie */}
              <input id="ilosc" name="ilosc" type="number" min={1} max={10} defaultValue={1} required className="field" />
            </div>
          ) : kind === "wykonczenie" ? (
            <>
              <div>
                <label className="label" htmlFor="zakres">
                  Zakres prac
                </label>
                <select id="zakres" name="zakres" required defaultValue="" className="field">
                  <option value="" disabled>
                    Wybierz…
                  </option>
                  <option>Kompleksowe wykończenie domu lub mieszkania</option>
                  <option>Wykończenie łazienki</option>
                  <option>Sufity podwieszane / adaptacja poddasza</option>
                  <option>Gładzie i malowanie</option>
                  <option>Gres, płytki lub panele</option>
                  <option>Tynki dekoracyjne</option>
                  <option>Inne</option>
                </select>
              </div>
              <div>
                <label className="label" htmlFor="metraz">
                  Metraż <span className="font-normal text-muted">(m², opcjonalnie)</span>
                </label>
                <input id="metraz" name="metraz" type="number" min={1} max={2000} className="field" />
              </div>
            </>
          ) : (
            <>
            <div>
              <label className="label" htmlFor="rodzaj_sprzatania">
                Rodzaj sprzątania
              </label>
              <select
                id="rodzaj_sprzatania"
                name="rodzaj_sprzatania"
                required
                defaultValue={params.get("rodzaj") === "swieta" ? "Przed świętami lub inną okazją" : ""}
                className="field"
              >
                <option value="" disabled>
                  Wybierz…
                </option>
                <option>Po wykończeniu</option>
                <option>Przed lub po wynajmie</option>
                <option>Przed świętami lub inną okazją</option>
                <option>Inne</option>
              </select>
            </div>
            <div>
              <label className="label" htmlFor="metraz">
                Metraż do sprzątania <span className="font-normal text-muted">(m²)</span>
              </label>
              <input id="metraz" name="metraz" type="number" min={1} max={2000} required className="field" />
            </div>
            </>
          )}
          <div>
            <label className="label" htmlFor="opis">
              Uwagi <span className="font-normal text-muted">(opcjonalnie)</span>
            </label>
            <textarea
              id="opis"
              name="opis"
              rows={4}
              placeholder={
                range
                  ? "Np. osuszanie wylewek, powierzchnia, piętro…"
                  : kind === "sprzatanie"
                    ? "Np. rodzaj lokalu, zakres, mycie okien…"
                    : "Np. stan deweloperski, dom czy mieszkanie, czy masz projekt…"
              }
              className="field"
            />
          </div>
        </div>
      </div>

      <ContactFields />
      <Consent />
      <FormStatus status={status} okText="" />

      <button type="submit" disabled={status.state === "sending"} className="btn-primary disabled:opacity-60">
        {status.state === "sending" ? "Wysyłanie…" : "Wyślij wstępną rezerwację"}
      </button>
      <p className="text-sm text-muted">
        Rezerwacja jest wstępna i niezobowiązująca. Termin staje się wiążący po potwierdzeniu telefonicznym.
      </p>
    </form>
  );
}
