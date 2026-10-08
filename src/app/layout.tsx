import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import NoiseOverlay from "@/components/layout/NoiseOverlay";
import CustomCursor from "@/components/layout/CustomCursor";
import SplashScreen from "@/components/layout/SplashScreen";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meuportifolio-flax-three.vercel.app"),
  title: {
    default: "Kayque Alberto - Desenvolvedor Web",
    template: "%s | Kayque Alberto",
  },
  description:
    "Portfólio de Kayque Alberto, desenvolvedor web com JavaScript, TypeScript, Node.js e Next.js.",
  authors: [{ name: "Kayque Alberto" }],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Kayque Alberto",
    title: "Kayque Alberto - Desenvolvedor Web",
    description:
      "Portfólio de Kayque Alberto, desenvolvedor web com JavaScript, TypeScript, Node.js e Next.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayque Alberto - Desenvolvedor Web",
    description:
      "Portfólio de Kayque Alberto, desenvolvedor web com JavaScript, TypeScript, Node.js e Next.js.",
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
        <LanguageProvider>
          <SplashScreen />
          <NoiseOverlay />
          <CustomCursor />
          <Header />
          <main className="flex-1 flex flex-col relative z-10">
            {children}
          </main>
          <Analytics />
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}
