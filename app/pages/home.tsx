// import { get_dictionary } from "get-dictionary";

import SiteWrapper from "app/components/site-wrapper";

export default function HomeComponent({
    lang = 'cs'
}: {
    lang: 'ru' | 'cs'
}) {
    // const dictionary = get_dictionary(lang);

    return (
        <SiteWrapper lang={lang}>
            <main>312</main>
        </SiteWrapper>
    );
}