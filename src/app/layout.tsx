import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./sidebar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luan Ferreira Vercel",
  description: "Portfolio Luan Ferreira Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="M3wr11_c7NpzVCvIx-OM7yMI_k2v3h0qCOW_anR1fcY"
      />
      <body className={inter.className}>
        <Sidebar />
        <div className="flex h-screen">
          <main className="h-full m-auto container w-full  md:p-0  lg:pr-20 p-5 py-10 pl-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
