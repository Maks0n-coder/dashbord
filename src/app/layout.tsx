import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../style/globals.scss";
import ThemeRegistry from '../componets/ThemeRegistry';
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashbord",
  description: "My project Dashbord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable}`}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
