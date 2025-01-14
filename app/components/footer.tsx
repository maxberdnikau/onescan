import { get_dictionary } from "get-dictionary";

export default function Footer({
    lang = 'ru'
}: {
    lang: 'ru' | 'cs'
}) {
    const dictionary = get_dictionary(lang);

    return (
      <footer>333</footer>
    );
}