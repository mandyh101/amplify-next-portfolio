import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo Next App",
  description: "Manage your daily tasks withg this simple, dreamy todo app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen w-screen justify-center items-center m-0 font-custom bg-gradient-to-b from-transparent via-backgroundStart to-backgroundEnd overflow-x-hidden">{children}</body>
    </html>
  );
}
