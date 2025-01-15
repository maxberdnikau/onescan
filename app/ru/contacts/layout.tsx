import SiteWrapper from "app/components/site-wrapper";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <SiteWrapper lang={'ru'}>
        <main className="flex flex-col static-page">
            <h1 className="text-center sm:text-left">Контакты</h1>
            <article className="flex flex-col">
                {children}
            </article>
        </main>
    </SiteWrapper>
  }