import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getCldOgImageUrl } from "next-cloudinary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const url=getCldOgImageUrl({src:"Portfolio_OG"})

export const metadata: Metadata = {
  title: "Michael Gitonga Mbae",
  description:
    "I am a web developer with expertise in creating solutions that streamline service delivery and solve problems more efficiently. I utilize appropriate tools and procedures to reduce development costs in terms of time and resources.",
    openGraph:{
      images:{
        width:1200,
        height:800,
        url
      }
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
