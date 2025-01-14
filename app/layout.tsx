import type { Metadata } from "next";

import "app/styles/accordion.css";
import "app/styles/font.css";
import "app/styles/slider.css";
import "app/styles/tailwind.css";
import "app/styles/globals.scss";

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
        className={`flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
