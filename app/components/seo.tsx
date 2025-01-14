import type { Metadata } from "next";

export const seo_builder = ({
    title = '',
    description = '',
    canonical = '',
    keywords = '',
}: {
    title: string,
    description?: string,
    canonical?: string,
    keywords?: string,
}): Metadata => {
    return {
        title: title,
        description: description,
        applicationName: 'Onescan',
        keywords: keywords,
        alternates: {
            canonical: `https://onescan.pro/` + canonical
        },
        openGraph: {
          title: title,
          description: description,
        },
        twitter: {
          title: title,
          description: description
        }
    }
};