import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "MagangKareer - Mulai Karier Profesional Anda",
  description: "Platform magang profesional #1 di Indonesia untuk mahasiswa dan fresh graduates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased selection:bg-gray-200 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}

