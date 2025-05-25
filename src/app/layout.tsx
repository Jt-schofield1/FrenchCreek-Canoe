import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./base.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | French Creek Trading Post",
    default: "French Creek Trading Post - A Trading Post"
  },
  description: "French Creek Canoe offers a unique trading post experience with local vendors, creek history, and AirBnB options.",
  metadataBase: new URL("https://frenchcreekcanoe.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frenchcreekcanoe.com",
    siteName: "French Creek Trading Post",
    images: [
      {
        url: "/Logo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "French Creek Trading Post",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-black selection:bg-cream-200 selection:text-black antialiased">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
