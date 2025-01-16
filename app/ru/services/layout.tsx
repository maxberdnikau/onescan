import { Metadata } from "next";
import SiteWrapper from "app/components/site-wrapper";

import { seo_builder } from "app/components/seo";

export const metadata: Metadata = seo_builder({
  title: 'Услуги',
  canonical: '/ru/services',
});

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <SiteWrapper lang={'ru'}>
        <main className="flex flex-col static-page">
            <h1 className="text-center sm:text-left">Услуги</h1>
            <article className="flex flex-col">
                {children}
            </article>
        </main>
    </SiteWrapper>
  }