import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NuTrack",
  description: "Keep track of what you eat to know when you need more nutrients.",
  // <meta name="google-site-verification" content="0HT4oHSJ8FDK8WfakgljVV-9zrlQL0XAYNxJHdJK1Lk" />
  other: { "google-site-verification": "0HT4oHSJ8FDK8WfakgljVV-9zrlQL0XAYNxJHdJK1Lk" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
