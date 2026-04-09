import type { Metadata } from "next";
import { Work_Sans, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Clean View Glass | Premium Glass Solutions Cape Town",
    template: "%s | Clean View Glass",
  },
  description:
    "Premium glass cut to size for homes and businesses in Cape Town. Residential glass, commercial glass, balustrades, mirrors, splashbacks, and emergency supply.",
  keywords: [
    "glass cut to size Cape Town",
    "custom cut glass",
    "glass supplier Cape Town",
    "glass balustrades",
    "shopfront glass",
    "residential glass Cape Town",
    "commercial glass supply",
    "emergency glass Cape Town",
    "Clean View Glass",
  ],
  openGraph: {
    title: "Clean View Glass | Premium Glass Solutions Cape Town",
    description:
      "Premium glass cut to size for homes and businesses in Cape Town.",
    type: "website",
    locale: "en_ZA",
    siteName: "Clean View Glass",
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
      className={`${workSans.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
