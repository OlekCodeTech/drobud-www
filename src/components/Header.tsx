"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/site";
import { SocialLinks } from "@/components/social";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4 xl:gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)} aria-label="DroBud — strona główna">
          <Image src="/sygnet-drobud.png" alt="" width={538} height={445} priority className="h-11 w-auto" />
          <span className="leading-none">
            <span className="block text-xl font-bold tracking-[0.14em]">DROBUD</span>
            <span className="mt-1 hidden whitespace-nowrap text-[0.55rem] font-semibold tracking-[0.22em] text-muted sm:block">
              WYKOŃCZENIA I REMONTY
            </span>
          </span>
        </Link>

        <nav aria-label="Główna" className="hidden items-center gap-5 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              className="whitespace-nowrap text-sm font-semibold text-ink/75 hover:text-ink aria-[current=page]:text-accent-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a href={site.phoneHref} className="hidden whitespace-nowrap text-sm font-bold sm:block xl:hidden 2xl:block">
            {site.phone}
          </a>
          <Link href="/wycena/" className="btn-gold whitespace-nowrap px-5 py-2.5">
            Wycena
          </Link>
          <button
            type="button"
            className="-mr-2 p-2 xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobilne"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobilne" aria-label="Mobilna" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white xl:hidden">
          <ul className="container-x py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-3 text-base font-semibold" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.phoneHref} className="block py-3 text-base font-bold text-accent-dark">
                Zadzwoń: {site.phone}
              </a>
            </li>
            <li className="py-3">
              <SocialLinks size="sm" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
