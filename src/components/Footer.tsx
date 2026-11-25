import Image from "next/image";
import Link from "next/link";
import { CookieSettingsLink } from "@/components/CookieBanner";
import { site } from "@/data/site";
import { SocialLinks } from "@/components/social";
import { services } from "@/data/services";
import { cities } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo-drobud.jpg"
            alt="DroBud — logo"
            width={554}
            height={608}
            className="h-auto w-36"
          />
          <p className="mt-3 text-sm text-muted">{site.slogan}</p>
          <address className="mt-5 text-sm not-italic leading-relaxed text-muted">
            {site.legalName}
            <br />
            {site.address.street}, {site.address.postalCode} {site.address.city}
            <br />
            NIP {site.nip}
          </address>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-muted">Usługi</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/uslugi/${s.slug}/`} className="text-muted hover:text-accent-dark">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-muted">Obszar działania</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/wykonczenia-wnetrz/${c.slug}/`} className="text-muted hover:text-accent-dark">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-muted">Kontakt</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="text-lg font-bold hover:text-accent-dark">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-muted hover:text-accent-dark">
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-5">
            <SocialLinks size="sm" />
          </div>
          <Link href="/wycena/" className="btn-gold mt-6">
            Wyceń swój projekt
          </Link>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-5">
            <Link href="/praca/" className="hover:text-ink">
              Praca
            </Link>
            <Link href="/blog/" className="hover:text-ink">
              Blog
            </Link>
            <Link href="/polityka-prywatnosci/" className="hover:text-ink">
              Polityka prywatności
            </Link>
            <CookieSettingsLink className="hover:text-ink" />
          </div>
        </div>
      </div>
    </footer>
  );
}
