"use client";

import { useState } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/logo-white.png"
            alt="gofidely"
            width={480}
            height={120}
            className="h-[120px] w-auto"
            priority
          />
        </Link>

        {/* Desktop menu */}
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

          {/* Desktop CTA */}
          <a
            href="#precios"
            className="hidden md:block bg-brand-green text-neutral-dark font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition text-sm"
          >
            {t.navbar.cta}
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white text-lg py-2 transition"
            >
              {t.navbar.howItWorks}
            </a>
            <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white text-lg py-2 transition"
            >
              {t.navbar.benefits}
            </a>
            <a
              href="#precios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white text-lg py-2 transition"
            >
              {t.navbar.pricing}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white text-lg py-2 transition"
            >
              {t.navbar.faq}
            </a>
            <a
              href="#precios"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-brand-green text-neutral-dark font-semibold px-5 py-3 rounded-full hover:opacity-90 transition text-center mt-2"
            >
              {t.navbar.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
