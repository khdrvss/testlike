import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], display: "swap" });

export const metadata: Metadata = {
  title: "Co-found.uz | Yechimchilar uchun platforma",
  description:
    "Co-found.uz — O'zbekiston yoshlarini real muammolarni birga yechishga, mukofot olishga va hamjamiyat qurishga chorlaydi.",
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={inter.className}>
      <body className="min-h-screen bg-cloud text-ink">
        {children}
      </body>
    </html>
  );
}
