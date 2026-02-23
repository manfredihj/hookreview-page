import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://gofidely.com'),
  title: {
    default: "gofidely — Convierte clientes felices en reseñas 5 estrellas",
    template: "%s | gofidely"
  },
  description: "Automatiza la recolección de reseñas en Google. Códigos QR personalizados, dashboard inteligente y más reseñas positivas para tu negocio.",
  keywords: ["reseñas Google", "Google reviews", "QR code reviews", "reputación online", "reseñas restaurantes", "reseñas negocios locales", "feedback clientes", "5 estrellas"],
  authors: [{ name: "gofidely" }],
  creator: "gofidely",
  publisher: "gofidely",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://gofidely.com",
    siteName: "gofidely",
    title: "gofidely — Convierte clientes felices en reseñas 5 estrellas",
    description: "Automatiza la recolección de reseñas en Google. Códigos QR personalizados, dashboard inteligente y más reseñas positivas para tu negocio.",
    images: [
      {
        url: "/logo-white.png",
        width: 1200,
        height: 630,
        alt: "gofidely - Reseñas en Google automatizadas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "gofidely — Convierte clientes felices en reseñas 5 estrellas",
    description: "Automatiza la recolección de reseñas en Google. Códigos QR personalizados, dashboard inteligente y más reseñas positivas para tu negocio.",
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
