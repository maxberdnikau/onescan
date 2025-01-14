
import Header from "app/components/header";
import Footer from "app/components/footer";

export default function SiteWrapper({
    children,
    lang = 'ru'
}: Readonly<{
    children: React.ReactNode,
    lang: 'ru' | 'cs'
}>) {
    return (
        <>
            <Header lang={lang} />
            {children}
            <Footer lang={lang} />
        </>
    );
}