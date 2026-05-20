import { Cormorant_Garamond, Great_Vibes, Montserrat } from "next/font/google";
import { WEDDING_CONTENT } from "@/src/data/constants";
import "./globals.css";

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400"]
});

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"]
});

const sansFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: WEDDING_CONTENT.seo.title,
  description: WEDDING_CONTENT.seo.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${scriptFont.variable} ${serifFont.variable} ${sansFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
