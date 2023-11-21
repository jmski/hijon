import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const voga = localFont({
  src: [
    {
      path: "../public/fonts/Voga-Medium.otf",
      weight: "400",
      style: "medium",
    },
  ],
  variable: "--font-voga-medium",
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
    <html lang="en" data-theme="coffee">
      <body
        className={`${inter.variable} ${voga.variable} ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
