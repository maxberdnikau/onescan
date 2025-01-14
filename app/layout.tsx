import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import "app/styles/globals.scss";
import "app/styles/tailwind.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Onescan",
  description: "",
};

export async function generateStaticParams() {
  return [{ lang: 'ru' }, { lang: 'cs' }]
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode,
  params: { lang: string }
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
