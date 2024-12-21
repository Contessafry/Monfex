import type { Metadata } from "next";
import { Markazi_Text, Radley } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/UI/NavBar";
import Footer from "@/components/UI/Footer";

const markaziText = Markazi_Text({
  variable: "--font-markazi-text",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const radley = Radley({
  variable: "--font-radley",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Monfex - Home",
  description: "Descrizione del sito",
  icons: {
    icon: "/monfex.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${markaziText.variable} ${radley.variable} antialiased bg-neutral font-markazi overflow-x-hidden`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
