import type { Metadata } from "next";
import { Archivo } from "next/font/google";

import QueryProvider from "@shared/providers/queryProvider";

import Header from "@shared/components/header";
import Footer from "@shared/components/footer";

import "./globals.css";

const archivo = Archivo({ subsets: ["latin"] });

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
      <body className={archivo.className} suppressHydrationWarning>
        <QueryProvider>
          <Header />
          <main className="min-h-screen flex-grow bg-white">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
