import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CargoFi — Financial infrastructure for freight",
  description:
    "Carriers get paid in minutes. Investors earn real yield from real freight.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png",  sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png",  sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "CargoFi — Financial infrastructure for freight",
    description:
      "Carriers get paid in minutes. Investors earn real yield from real freight.",
    url: "https://cargofi.io",
    siteName: "CargoFi",
    locale: "en_US",
    type: "website",
    images: [{ url: "/icon-512x512.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
