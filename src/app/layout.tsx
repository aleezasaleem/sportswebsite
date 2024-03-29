import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Responsive from "./components/Navbar/Responsive";
import Footer from "./components/Footer/Footer";



const oswald = Oswald({
  weight:['200','300','400','500','600','700'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Sports Website Template",
  description: "This is my sport website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
   <Responsive />
        {children}</body>
        <Footer />
    </html>
  );
}
