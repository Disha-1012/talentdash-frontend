import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/ui/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TalentDash | Software Engineer Salary Intelligence",
    template: "%s | TalentDash",
  },

  description:
    "Explore software engineer salaries, company compensation insights, and compare tech salaries.",

  keywords: [
    "software engineer salary",
    "developer compensation",
    "tech salary comparison",
    "salary dashboard",
    "TalentDash",
  ],

  authors: [{ name: "TalentDash" }],

  robots: { index: true, follow: true },

  openGraph: {
    title: "TalentDash | Software Engineer Salary Intelligence",
    description: "Compare software engineer salaries across companies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable}
        ${mono.variable}
        h-full
        antialiased
        `}
    >
      <body
        className="
            min-h-full
            flex
            flex-col
            bg-[#F7F7F7]
            text-[#484848]
            "
      >
        <JsonLd />

        <Navbar />

        {children}
      </body>
    </html>
  );
}