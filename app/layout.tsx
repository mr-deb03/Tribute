import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sneha — A Journey Written in Strength & Kindness",
  description:
    "A cinematic digital tribute to Sneha — a girl who stayed kind through pain, grew through struggles, and turned her dreams into reality without losing her beautiful heart.",
  openGraph: {
    title: "Sneha — A Journey Written in Strength & Kindness",
    description:
      "A heartfelt visual diary of resilience, kindness, and quiet determination.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dancing.variable}`}
    >
      <body className="font-body">{children}</body>
    </html>
  );
}
