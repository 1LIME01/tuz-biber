import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuz Biber | Turkish Finishing Seasoning",
  description: "Small-batch Turkish finishing seasoning from Thrace to Florida.",
  keywords: ["Turkish seasoning", "Turkish finishing seasoning", "small-batch seasoning", "Tuz Biber"],
  openGraph: {
    title: "Tuz Biber",
    description: "Cook. Plate. Sprinkle. Eat.",
    type: "website",
    siteName: "Tuz Biber",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#241B14] text-[#EFE6D5]">{children}</body>
    </html>
  );
}
