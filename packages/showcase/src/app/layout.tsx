import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b82f6",
};

export const metadata: Metadata = {
  title: "DynamicUI - React Component Library by DynamicPixels",
  description:
    "A modern, comprehensive React UI component library by DynamicPixels. Build beautiful applications with our collection of high-quality, accessible components.",
  keywords:
    "react, ui, components, typescript, dynamicpixels, dynamicui, design system",
  authors: [{ name: "DynamicPixels", url: "https://dynamicpixels.dev" }],
  creator: "DynamicPixels",
  publisher: "DynamicPixels",
  openGraph: {
    title: "DynamicUI - React Component Library",
    description:
      "A modern, comprehensive React UI component library by DynamicPixels",
    url: "https://dynamicui.dynamicpixels.dev",
    siteName: "DynamicUI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DynamicUI - React Component Library",
    description:
      "A modern, comprehensive React UI component library by DynamicPixels",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background text-foreground transition-colors duration-300`}
      >
        <Header />

        <main className="flex-grow bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row">
              <Sidebar />
              <div className="flex-grow lg:max-w-3xl xl:max-w-4xl mx-auto">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
