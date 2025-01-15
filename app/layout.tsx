import { GoogleAnalytics } from '@next/third-parties/google';

import "app/styles/accordion.css";
import "app/styles/font.css";
import "app/styles/slider.css";
import "app/styles/tailwind.css";
import "app/styles/globals.scss";

// export async function generateStaticParams() {
//   return [{ lang: 'ru' }, { lang: 'cs' }]
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html>
      <head>
        <meta name="apple-mobile-web-app-title" content="Onescan" />
      </head>
      <body
        className={`flex flex-col antialiased`}
      >
        <div className="flex flex-col mx-auto w-full h-full default-container">
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId='G-67ZK64X96Z' />
    </html>
  );
}
