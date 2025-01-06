import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@shared/components/header";
import Footer from "@shared/components/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
