import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://hookflow-landing-page.vercel.app'),
  title: {
    default: "gofidely — Agentes de IA para crecer",
    template: "%s | gofidely"
  },
  description: "Automatiza tu atención y aumenta ventas con IA. Agentes conversacionales para WhatsApp, Instagram y Facebook.",
  keywords: ["IA", "chatbot", "WhatsApp", "automatización", "ventas", "ecommerce", "carritos abandonados"],
  authors: [{ name: "gofidely" }],
  creator: "gofidely",
  publisher: "gofidely",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://hookflow-landing-page.vercel.app",
    siteName: "gofidely",
    title: "gofidely — Agentes de IA para crecer",
    description: "Automatiza tu atención y aumenta ventas con IA. Agentes conversacionales para WhatsApp, Instagram y Facebook.",
    images: [
      {
        url: "/logo-white.png",
        width: 1200,
        height: 630,
        alt: "gofidely",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "gofidely — Agentes de IA para crecer",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
