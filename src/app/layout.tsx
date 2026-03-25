import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spill — Real you. Real me.",
  description:
    "In a world full of AI, your real voice matters. AI asks the questions. You answer on camera. Raw, unfiltered, real.",
  openGraph: {
    title: "Spill — Real you. Real me.",
    description:
      "In a world full of AI, your real voice matters. AI asks the questions. You answer on camera. Raw, unfiltered, real.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
