import type { Metadata } from "next";
import Link from "next/link";

import SiteWrapper from "app/components/site-wrapper";

import { seo_builder } from "app/components/seo";

export const metadata: Metadata = seo_builder({
  title: '404 - Žádná taková stránka neexistuje'
});

export default function NotFoundPage () {
  return (
    <SiteWrapper lang={'cs'}>
        <main className="flex flex-col py-192px md:pt-64px">
            <h1 className="text-6xl md:text-4xl font-bold">
                Žádná taková stránka neexistuje
            </h1>
            <Link href={'/'}
                className="mt-4px self-baseline">
                Návrat na domovskou stránku
            </Link>
        </main>
    </SiteWrapper>
  )
}
