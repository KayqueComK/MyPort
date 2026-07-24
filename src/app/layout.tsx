import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import NoiseOverlay from "@/components/layout/NoiseOverlay";
import CustomCursor from "@/components/layout/CustomCursor";
import SplashScreen from "@/components/layout/SplashScreen";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kayque Alberto - Portfólio",
  description: "Portfólio de Kayque Alberto (KIQ) - Designer Gráfico, Designer UX/UI & Desenvolvedor Front-End",
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
