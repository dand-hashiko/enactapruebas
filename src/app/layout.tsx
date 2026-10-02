import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enacta | Soluciones Digitales, Cloud & Desarrollo Web de Alto Rendimiento",
  description:
    "Transformamos empresas mediante software a medida, desarrollo web SPA moderno, arquitecturas cloud escalables e inteligencia artificial. Despliegues ultrarrápidos y arquitectura de vanguardia.",
  keywords: [
    "Enacta",
    "Desarrollo Web Chile",
    "Next.js",
    "Software a medida",
    "Cloud Architecture",
    "Vercel",
    "Inteligencia Artificial",
    "Landing Page SPA",
  ],
  authors: [{ name: "Enacta SpA", url: "https://enacta.cl" }],
  creator: "Enacta SpA",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://enacta.cl",
    title: "Enacta | Soluciones Digitales & Desarrollo de Alto Rendimiento",
    description:
      "Transformamos tu visión en productos digitales de impacto global. Desarrollo web moderno, escalabilidad cloud y soluciones inteligentes.",
    siteName: "Enacta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enacta | Soluciones Digitales",
    description: "Desarrollo web moderno, arquitecturas cloud e IA aplicada.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
