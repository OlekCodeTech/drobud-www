import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd, localBusinessSchema } from "@/components/JsonLd";
import { site } from "@/data/site";
import { HolidayPopup } from "@/components/HolidayPopup";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "DroBud — wykończenia wnętrz pod klucz | Wieluń i okolice",
    template: "%s | DroBud Wieluń",
  },
  description:
    "DroBud Damian Drosiński — wykończenia wnętrz pod klucz, remonty łazienek, gładzie, płytki, zabudowy G-K, wynajem osuszaczy i sprzątanie po remoncie. Wieluń i okolice do 50 km.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "DroBud — Usługi Wykończeniowe",
  },
  robots: site.indexable ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#tresc"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
        >
          Przejdź do treści
        </a>
        <Header />
        <main id="tresc" className="flex-1">
          {children}
        </main>
        <Footer />
        <HolidayPopup />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
