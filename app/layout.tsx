import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Bucx - Borderless Banking Built For You",
  description:
    "Experience borderless banking with Bucx. Send, receive and manage your money across borders seamlessly.",
  keywords: [
    "banking",
    "borderless banking",
    "international transfers",
    "fintech",
    "digital banking",
  ],
  openGraph: {
    title: "Bucx - Borderless Banking Built For You",
    siteName: "Bucx",
    url: "bucx.app",
    description:
      "Experience borderless banking with Bucx. Send, receive and manage your money across borders seamlessly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Remove the className that includes Geist font if it exists */}
      <body>{children}</body>
    </html>
  );
}
