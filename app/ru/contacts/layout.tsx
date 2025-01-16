import { Metadata } from "next";
import SiteWrapper from "app/components/site-wrapper";

import { seo_builder } from "app/components/seo";

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
        </main>
    </SiteWrapper>
  }