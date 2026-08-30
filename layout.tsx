import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Priyangshu Bala | Data, AI & Product Portfolio",
  description: "Priyangshu Bala is an IIT Madras Data Science candidate and analyst working across business analytics, product thinking, machine learning and AI evaluation.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
