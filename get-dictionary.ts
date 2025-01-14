import "server-only";

type Locale = ["ru", "cs"][number];

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
  cs: () => import("./dictionaries/cs.json").then((module) => module.default),
};

export const get_dictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.ru();