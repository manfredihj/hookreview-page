import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { FacebookPixel } from "@/components/FacebookPixel";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { defaultLocale, isValidLocale, type Locale } from "@/lib/i18n/config";

export const metadata: Metadata = {
  metadataBase: new URL('https://hookflow-landing-page.vercel.app'),
  title: {
    default: "hookreview — Agentes de IA para crecer",
    template: "%s | hookreview"
  },
  description: "Automatiza tu atención y aumenta ventas con IA. Agentes conversacionales para WhatsApp, Instagram y Facebook.",
  keywords: ["IA", "chatbot", "WhatsApp", "automatización", "ventas", "ecommerce", "carritos abandonados"],
  authors: [{ name: "hookreview" }],
  creator: "hookreview",
  publisher: "hookreview",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://hookflow-landing-page.vercel.app",
    siteName: "hookreview",
    title: "hookreview — Agentes de IA para crecer",
    description: "Automatiza tu atención y aumenta ventas con IA. Agentes conversacionales para WhatsApp, Instagram y Facebook.",
    images: [
      {
        url: "/logo-white.png",
        width: 1200,
        height: 630,
        alt: "hookreview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "hookreview — Agentes de IA para crecer",
    description: "Automatiza tu atención y aumenta ventas con IA. Agentes conversacionales para WhatsApp, Instagram y Facebook.",
    images: ["/logo-white.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("locale")?.value;
  const locale: Locale = localeCookie && isValidLocale(localeCookie) ? localeCookie : defaultLocale;

  // Map locale to HTML lang attribute
  const langMap: Record<Locale, string> = {
    "en": "en",
    "es-AR": "es-AR",
    "es-MX": "es-MX",
  };

  return (
    <html lang={langMap[locale]}>
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
