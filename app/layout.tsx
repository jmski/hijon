import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const machinePro = localFont({
  src: [
    {
      path: "../public/fonts/MachinePro.otf",
      weight: "400",
    },
  ],
  variable: "--font-machinepro",
});

const oceanRush = localFont({
  src: [
    {
      path: "../public/fonts/OceanRush.otf",
      weight: "400",
    },
  ],
  variable: "--font-oceanrush",
});

export const metadata: Metadata = {
  title: "Hi Jon",
  description: "Welcome to my world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${oceanRush.variable} ${machinePro.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
