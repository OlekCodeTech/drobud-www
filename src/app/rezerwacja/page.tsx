import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Rezerwacja terminu — wykończenie, osuszacze, sprzątanie",
  description:
    "Zapytaj online o termin wykończenia, zarezerwuj osuszacze lub sprzątanie po wykończeniu, przed i po wynajmie i przed świętami — Wieluń i okolice.",
  alternates: { canonical: "/rezerwacja/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Rezerwacja"
        title="Zapytaj o termin"
        lead="Zapytaj o dowolny termin wykończenia albo zarezerwuj osuszacz lub sprzątanie. Termin potwierdzamy telefonicznie."
      />
      <section className="bg-paper">
        <div className="container-x py-14">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <Suspense fallback={<p>Ładowanie kalendarza…</p>}>
              <BookingForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
