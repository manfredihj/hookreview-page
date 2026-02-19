"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n/config";

interface LocaleSwitcherProps {
  currentLocale: Locale;
}

export function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get the path without the current locale prefix
  const getLocalizedPath = (newLocale: Locale) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";
    return `/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
  };

  const handleLocaleClick = (locale: Locale) => {
    // Set cookie for future visits
    document.cookie = `locale=${locale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition px-3 py-2 rounded-lg hover:bg-white/10"
        aria-label="Change language"
      >
        <span className="text-base">{localeFlags[currentLocale]}</span>
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-neutral-dark/95 backdrop-blur-md border border-white/20 rounded-xl shadow-lg overflow-hidden z-50">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={getLocalizedPath(locale)}
              onClick={() => handleLocaleClick(locale)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition ${
                locale === currentLocale
                  ? "bg-brand-green/20 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-base">{localeFlags[locale]}</span>
              <span>{localeNames[locale]}</span>
              {locale === currentLocale && (
                <svg className="w-4 h-4 ml-auto text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
