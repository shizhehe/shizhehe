import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from 'next/font/google'

const fira_code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shizhe He",
  description: "Shizhe He is an 20-year-old startup founder and researcher building energy-effienct computing paradigms. He is recognized for his past research in Healthcare AI and contracting for various tech and e-commerce companies. He studies computer science and international relations at Stanford.",
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
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body
        className={fira_code.className}
      >
        {children}
      </body>
    </html>
  );
}
