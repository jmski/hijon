import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Head } from "./head";

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

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${voga.variable} ${poppins.className}`}>
        <Head />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
