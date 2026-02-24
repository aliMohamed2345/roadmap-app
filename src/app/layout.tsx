import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav/Nav";
import PhoneMenu from "./components/Nav/PhoneMenu";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import ReduxProvider from "./ReduxProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roadmap-App",
  description: "A dedicated website for roadmaps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Suspense>
          <ReduxProvider>
            <Toaster reverseOrder={false} position="top-center" />
            <Nav />
            {children}
            <PhoneMenu />
          </ReduxProvider>
        </Suspense>
      </body>
    </html>
  );
}
