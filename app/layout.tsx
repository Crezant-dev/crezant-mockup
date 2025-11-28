// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Crezant – Clean, Modern Systems",
  description:
    "Crezant designs and builds minimal, efficient web apps and automations that make operations feel simple, not overwhelming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#F5F7FA]">
      <body
        className={`${inter.variable} ${montserrat.variable} h-full text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
