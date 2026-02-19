import { notFound } from "next/navigation";
import { FacebookPixel } from "@/components/FacebookPixel";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { locales, localeToLang, isValidLocale, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const lang = localeToLang[locale as Locale];

  return (
    <html lang={lang}>
      <head>
        {/* hreflang tags for SEO */}
        <link rel="alternate" hrefLang="es-AR" href="https://hookflow-landing-page.vercel.app/ar" />
        <link rel="alternate" hrefLang="es-MX" href="https://hookflow-landing-page.vercel.app/mx" />
        <link rel="alternate" hrefLang="en" href="https://hookflow-landing-page.vercel.app/en" />
        <link rel="alternate" hrefLang="x-default" href="https://hookflow-landing-page.vercel.app/en" />
      </head>
      <body>
        <GoogleTagManager />
        <FacebookPixel />
        {children}
        <WhatsAppButton />
        <SpeedInsights />
      </body>
    </html>
  );
}
