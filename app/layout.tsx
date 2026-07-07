import type { Metadata } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konoba Dalmatina — Zadar | Dalmatinska kuhinja u starom gradu",
  description:
    "Konoba Dalmatina, Zadar — obiteljska konoba u kamenim uličicama starog grada. Riba s gradela, pašticada, crni rižot i domaće vino. TripAdvisor 4.5 · 497 recenzija.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${cormorant.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
