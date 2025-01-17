import { Metadata } from "next";
import SiteWrapper from "app/components/site-wrapper";

import { seo_builder } from "app/components/seo";

import YouTube from 'app/components/main/static/contacts/YouTube';

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

            <YouTube />

            <blockquote className="tiktok-embed"
                cite="https://www.tiktok.com/@onescan.pro"
                data-unique-id="onescan.pro"
                data-embed-from="embed_page"
                data-embed-type="creator"
                style={{ maxWidth: 780, minWidth: 288 }}>
                <section>
                    <a target="_blank"
                    href="https://www.tiktok.com/@onescan.pro?refer=creator_embed">@onescan.pro</a>
                </section>
            </blockquote>
            <script async src="https://www.tiktok.com/embed.js"></script>
        </main>
    </SiteWrapper>
  }