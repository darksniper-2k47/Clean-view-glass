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
    "Premium glass installation and glazing services for homes and businesses in Cape Town. Residential glass, commercial glazing, balustrades, mirrors, and emergency repair.",
  keywords: [
    "glass installation Cape Town",
    "glazing services",
    "glass balustrades",
    "shopfront glass",
    "residential glass Cape Town",
    "commercial glazing",
    "emergency glass repair",
    "Clean View Glass",
  ],
  openGraph: {
    title: "Clean View Glass | Premium Glass Solutions Cape Town",
    description:
      "Precision glass installation and glazing services for homes and businesses in Cape Town.",
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
