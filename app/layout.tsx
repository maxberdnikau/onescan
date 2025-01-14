import "app/styles/accordion.css";
import "app/styles/font.css";
import "app/styles/slider.css";
import "app/styles/tailwind.css";
import "app/styles/globals.scss";

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
      <head>
        <meta name="apple-mobile-web-app-title" content="Onescan" />
      </head>
      <body
        className={`flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
