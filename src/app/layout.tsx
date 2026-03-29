import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shizhe He",
  description:
    "Shizhe He — CS & International Relations at Stanford. Building excavators, not shovels.",
  keywords: [
    "shizhe he",
    "stanford",
    "machine learning",
    "ai",
    "computer science",
    "neuromorphic computing",
    "agentic systems",
  ],
  authors: [{ name: "Shizhe He" }],
  creator: "Shizhe He",
  publisher: "Shizhe He",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shizhehe.com"),
  alternates: {
    canonical: "https://shizhehe.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
