"use client";

import Image from "next/image";
import Link from "next/link";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

interface NavbarProps {
  t: Dictionary;
  locale: Locale;
}

export function Navbar({ t, locale }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-white.png"
            alt="Hookreview"
            width={160}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#como-funciona"
            className="text-white/80 hover:text-white text-sm transition"
          >
            {t.navbar.howItWorks}
          </a>
          <a
            href="#beneficios"
            className="text-white/80 hover:text-white text-sm transition"
          >
            {t.navbar.benefits}
          </a>
          <a
            href="#precios"
            className="text-white/80 hover:text-white text-sm transition"
          >
            {t.navbar.pricing}
          </a>
          <a
            href="#faq"
            className="text-white/80 hover:text-white text-sm transition"
          >
            {t.navbar.faq}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <LocaleSwitcher currentLocale={locale} />
          <a
            href="#precios"
            className="bg-brand-green text-neutral-dark font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition text-sm"
          >
            {t.navbar.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
