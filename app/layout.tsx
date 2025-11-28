import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crezant | Minimal Tech Studio",
  description:
    "Clean, modern systems for real businesses. Custom web apps, automation, and technical consulting by Crezant.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--crezant-slate)] text-[var(--crezant-dark)] antialiased">
        {children}
      </body>
    </html>
  );
}
