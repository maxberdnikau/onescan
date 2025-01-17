import { Metadata } from "next";
import SiteWrapper from "app/components/site-wrapper";

import { seo_builder } from "app/components/seo";

import YouTube from 'app/components/main/static/contacts/YouTube';

export const metadata: Metadata = seo_builder({
  title: 'Контакты',
  description: 'Меня зовут Егор Попов, я занимаюсь профессиональной проверкой и индивидуальным подбором автомобилей в Чехии и других странах Евросоюза.',
  canonical: '/ru/contacts',
});

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <SiteWrapper lang={'ru'}>
        <main className="flex flex-col static-page">
            <h1 className="text-center sm:text-left">Контакты</h1>
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