import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorFollower } from "@/components/motion/CursorFollower";
import { PageLoader } from "@/components/motion/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rowbielopez.dev"),
  title: {
    default: "Rowbie Lopez — ICT Educator & Web Systems Developer",
    template: "%s | Rowbie Lopez",
  },
  description:
    "Rowbie Lopez is an ICT Instructor, Web & Information Systems Developer, and Digital Transformation Advocate at Cagayan State University. Over a decade of experience in ICT education, university systems, and AI-assisted development.",
  keywords: [
    "Rowbie Lopez",
    "ICT Instructor",
    "Web Developer",
    "Information Systems",
    "Cagayan State University",
    "Digital Transformation",
    "Philippines",
    "AI-assisted development",
    "EdTech",
    "RobTech Journey",
  ],
  authors: [{ name: "Rowbie Lopez", url: "https://rowbielopez.dev" }],
  creator: "Rowbie Lopez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rowbielopez.dev",
    siteName: "Rowbie Lopez Portfolio",
    title: "Rowbie Lopez — ICT Educator & Web Systems Developer",
    description:
      "Building digital solutions for education, institutions, and innovation. ICT Instructor and University Senior Programmer at Cagayan State University.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rowbie Lopez — ICT Educator & Web Systems Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rowbie Lopez — ICT Educator & Web Systems Developer",
    description:
      "Building digital solutions for education, institutions, and innovation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111111]">
        <PageLoader />
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
