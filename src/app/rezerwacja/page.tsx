import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Rezerwacja osuszaczy i sprzątania",
  description:
    "Wstępna rezerwacja terminu online: wynajem osuszaczy oraz sprzątanie po remoncie, przed i po wynajmie i przed świętami — Wieluń i okolice.",
  alternates: { canonical: "/rezerwacja/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Rezerwacja"
        title="Zarezerwuj osuszacz lub sprzątanie"
        lead="Wybierz usługę i termin w kalendarzu. Rezerwację potwierdzamy telefonicznie."
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
