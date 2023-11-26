import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import PageTransition from "./home/template";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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
      <body className={`${voga.variable} ${poppins.className}`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
