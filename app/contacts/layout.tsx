import { Metadata } from "next";
import SiteWrapper from "app/components/site-wrapper";

import { seo_builder } from "app/components/seo";

export const metadata: Metadata = seo_builder({
    title: 'Kontakt',
    description: 'Jmenuji se Jegor Popov, zabývám se profesionální kontrolou a individuálním výběrem aut v České republice a dalších zemích Evropské unie.',
    canonical: '/contacts',
});

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <SiteWrapper lang={'cs'}>
        <main className="flex flex-col static-page">
            <h1 className="text-center sm:text-left">Kontakt</h1>
            <article className="flex flex-col">
                {children}
            </article>
        </main>
    </SiteWrapper>
  }