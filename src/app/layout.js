import { Geist, Geist_Mono } from "next/font/google";
import { Arimo, Nunito } from "next/font/google";
import "./globals.css";
import Menu from "@components/Menu"; // Import Menu Component
import Footer from './../components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./scrollToTop";


const arimo = Arimo({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-arimo" });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-nunito" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ALTA FUTURIS",
  description: "BASED IN TEXAS, SERVING GLOBALLY!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Menu /> 
      {children}
      <Footer/>
      </body>
    </html>
  );
}
