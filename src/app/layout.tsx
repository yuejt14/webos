import "./globals.scss";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { description, title } from "package.json";
import StyledApp from "@/components/apps/StyledApp";
import { SessionProvider } from "@/contexts/session";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>
          <SessionProvider>
            <StyledApp>{children}</StyledApp>
          </SessionProvider>
        </main>
      </body>
    </html>
  );
}
