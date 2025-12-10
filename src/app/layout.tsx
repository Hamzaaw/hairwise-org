import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HairWise+ | AI-Powered Hair Health Analysis",
  description:
    "Track your hair health with precision AI analysis. Monitor density, Norwood staging, and build science-backed care routines. Results you can measure.",
  keywords: [
    "hair analysis",
    "hair loss tracking",
    "Norwood scale",
    "hair density",
    "AI hair scanner",
    "men's hair care",
  ],
  authors: [{ name: "HairWise+" }],
  openGraph: {
    title: "HairWise+ | AI-Powered Hair Health Analysis",
    description:
      "Track your hair health with precision AI analysis. Monitor density, Norwood staging, and build science-backed care routines.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HairWise+ | AI-Powered Hair Health Analysis",
    description:
      "Track your hair health with precision AI analysis. Monitor density, Norwood staging, and build science-backed care routines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
