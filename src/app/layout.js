import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personSchema } from "@/data/personSchema";
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashikur Rahaman Ahad | Portfolio",
  description: "I'm Ashikur Rahaman Ahad, a passionate full-stack developer. Explore my portfolio to see my projects, skills, and experience in creating engaging web applications.",
};

export default function RootLayout({ children }) {
  return (
<html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth scroll-pt-28`}
    >
      <body className="min-h-full flex flex-col">
        {/* Structured Data (JSON-LD) */}
        <script 
        type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
