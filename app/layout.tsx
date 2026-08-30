import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Priyangshu Bala | Data, AI & Product Portfolio",
  description: "I'm Priyangshu Bala, an IIT Madras Data Science graduate and multidisciplinary analyst specializing in Business Analytics, Product Thinking, Applied Machine Learning and AI Evaluation—turning Complex Data into Clear, Actionable Decisions.
",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
