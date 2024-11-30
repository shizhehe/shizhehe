import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from 'next/font/google'

const fira_code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shizhe He",
  description: "Shizhe He is an 20-year-old startup founder and researcher building in the machine learning space. She was recognized for creating an AI accessibility app for youth, a fintech software that won the World Series of Innovation, and more. She studies computer science and neuroscience at Stanford.",
  keywords: ["shizhe he", "shizhe", "he", "stanford", "startup", "founder", "building", "engineer", "neuromorphics", "machine learning", "ai", "computer science", "neuromorphic computing"],
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
      <body
        className={fira_code.className}
      >
        {children}
      </body>
    </html>
  );
}
