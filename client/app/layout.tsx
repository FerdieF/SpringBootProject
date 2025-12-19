import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar/Navbar";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BukuKu",
  description: "Mencari buku terbaik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
