import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/app/components/ThemeProvider";
import Navigation from "@/app/components/Navigation";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  metadataBase: new URL("https://a-n.io"),
  title: "Adrian Nasrat",
  description:
    "Student at Dalarna University in Sweden, passionate about software development, problem-solving, and digital services. Eager to explore well-designed systems and innovative technologies to shape the future of IT.",
  openGraph: {
    title: "Adrian Nasrat",
    url: "https://a-n.io/",
    images: [{ url: "https://a-n.io/api/og?title=A-N.io", alt: "a-n.io" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_PUBLISHABLE_KEY}>
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className="width-full bg-contrast text-primary antialiased dark:bg-primary">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation />
            <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
              {children}
            </div>
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
