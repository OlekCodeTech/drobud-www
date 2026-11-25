import { site } from "@/data/site";
import { cities } from "@/data/content";
import type { Service } from "@/data/services";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#firma`,
    name: "DroBud Usługi Wykończeniowe Damian Drosiński",
    url: site.url,
    telephone: "+48782120663",
    email: site.email,
    slogan: site.slogan,
    award: [
      "Laureat plebiscytu Mistrzowie Budownictwa 2026 — województwo łódzkie (firma)",
      "Laureat plebiscytu Mistrzowie Budownictwa 2026 — województwo łódzkie (Damian Drosiński)",
    ],
    foundingDate: String(site.since),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: "PL",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: cities.map((c) => ({ "@type": "City", name: c.name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "16:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
    ],
    sameAs: [site.social.facebook, site.social.tiktok, site.social.instagram].filter(Boolean),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short,
    url: `${site.url}/uslugi/${service.slug}/`,
    provider: { "@id": `${site.url}/#firma` },
    areaServed: cities.map((c) => ({ "@type": "City", name: c.name })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
