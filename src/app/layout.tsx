import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNavBar from "@/components/MobileNavBar";
import ClientUI from "./ClientUI";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Foodmart – Siêu thị thực phẩm tươi sống',
    template: '%s | Foodmart',
  },
  description:
    'Foodmart – Siêu thị thực phẩm tươi sống hàng đầu Việt Nam. Rau củ, thịt cá tươi mỗi ngày, giao nhanh trong ngày.',
  // metadataBase: new URL('sieuthifoodmart.com'),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'Foodmart',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <MobileNavBar />
        <Footer />
        <ClientUI />
      </body>
    </html>
  );
}
