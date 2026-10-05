import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import NoiseOverlay from "@/components/layout/NoiseOverlay";
import CustomCursor from "@/components/layout/CustomCursor";
import SplashScreen from "@/components/layout/SplashScreen";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kayque Alberto - Desenvolvedor Front-End & UI/UX",
    template: "%s | Kayque Alberto",
  },
  description:
    "Desenvolvedor Front-End com olhar de UI/UX Design. Crio interfaces modernas, interativas e de alta performance com React e Next.js.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <SplashScreen />
        <NoiseOverlay />
        <CustomCursor />
        <Header />
        <main className="flex-1 flex flex-col relative z-10">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
