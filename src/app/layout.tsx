import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steinbeis Beratungszentrum Bau- und Immobilienökonomie | Zertifizierte Sachverständige",
  description: "Professionelle Beratung für Bau- und Immobilienwirtschaft. Wertermittlung, Baukostenplanung, Risk Engineering und Sachverständigengutachten von zertifizierten Experten.",
  keywords: [
    "Steinbeis",
    "Immobilienbewertung",
    "Baukostenplanung",
    "Sachverständiger",
    "Wertermittlung",
    "Risk Engineering",
    "Immobilienökonomie",
    "DIN EN ISO/IEC 17024",
    "Berlin",
    "Gutachten"
  ],
  authors: [{ name: "Prof. Dr. Christoph Wagener" }],
  creator: "Steinbeis Beratungszentrum Bau- und Immobilienökonomie",
  publisher: "Steinbeis Beratungszentrum",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://steinbeis-bau.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Steinbeis Beratungszentrum Bau- und Immobilienökonomie",
    description: "Zertifizierte Sachverständige für Immobilienbewertung, Baukostenplanung und Risk Engineering. Über 25 Jahre Erfahrung im Bau- und Immobiliensektor.",
    url: 'https://steinbeis-bau.de',
    siteName: 'Steinbeis Beratungszentrum',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/images/steinbeis-logo.png',
        width: 1200,
        height: 630,
        alt: 'Steinbeis Beratungszentrum Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Steinbeis Beratungszentrum Bau- und Immobilienökonomie",
    description: "Professionelle Beratung für Bau- und Immobilienwirtschaft von zertifizierten Sachverständigen.",
    images: ['/images/steinbeis-logo.png'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4991A5" />
        <meta name="msapplication-TileColor" content="#4991A5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-albert-sans antialiased">
        {children}
      </body>
    </html>
  );
}
