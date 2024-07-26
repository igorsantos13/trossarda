import type { Metadata } from "next";
import { Kanit } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", '500', '600', '700', '800', "900" ],
  variable: '--font-kanit'
  
  });

export const metadata: Metadata = {
  title: "Trossarda | Streamer e Influencer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} font-sans bg-primary text-white leading-loose`}>
        
          <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>

      
      </body>
    </html>
  );
}
