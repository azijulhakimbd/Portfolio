import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://azijul.pro.bd"),

  title: {
    default: "Md. Azijul Hakim | AI-Focused Frontend Developer",
    template: "%s | Md. Azijul Hakim",
  },

  description:
    "Md. Azijul Hakim is an AI-focused Frontend Developer from Bangladesh building modern, intelligent, and user-centered web applications with Next.js, TypeScript, React, and AI technologies.",

  keywords: [
    "Md. Azijul Hakim",
    "Azijul Hakim",
    "AI Developer",
    "AI-focused Frontend Developer",
    "Frontend Developer Bangladesh",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "AI Engineer",
    "Generative AI",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
  ],

  authors: [
    {
      name: "Md. Azijul Hakim",
      url: "https://azijul.pro.bd",
    },
  ],

  creator: "Md. Azijul Hakim",
  publisher: "Md. Azijul Hakim",

  alternates: {
    canonical: "https://azijul.pro.bd",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azijul.pro.bd",
    siteName: "Md. Azijul Hakim",
    title: "Md. Azijul Hakim | AI-Focused Frontend Developer",
    description:
      "AI-focused Frontend Developer building modern web experiences with Next.js, TypeScript, React, and AI technologies.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Md. Azijul Hakim | AI-Focused Frontend Developer",
    description:
      "AI-focused Frontend Developer building modern web experiences with Next.js, TypeScript, React, and AI technologies.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geist.variable}
        ${geistMono.variable}
        ${inter.variable}
        ${jetbrainsMono.variable}
        h-full
        antialiased
      `}
    >
      <body>
        <ThemeProvider>
          <Navbar/>
          {children}
          <Footer/>
          </ThemeProvider>
      </body>
    </html>
  );
}