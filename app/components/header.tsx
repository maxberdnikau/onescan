import { get_dictionary } from "get-dictionary";

export default function Header({
    lang = 'ru'
}: {
    lang: 'ru' | 'cs'
}) {
    const dictionary = get_dictionary(lang);

    return (
      <header>111</header>
    );
}