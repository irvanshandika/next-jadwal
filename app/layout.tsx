/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Partytown } from "@builder.io/partytown/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jadwal Kuliah",
    template: "%s | Jadwal Kuliah",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <script src="https://static.cloudflareinsights.com/beacon.min.js" type="text/partytown" />
      </body>
    </html>
  );
}
