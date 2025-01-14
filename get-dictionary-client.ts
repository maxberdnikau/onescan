type Locale = ["ru", "cs"][number];

export const get_dictionary = async (
  locale: Locale,
  // component: ComponentType
) => {
  try {
    const request_dict = () => import(`./dictionaries/header/menu/${locale}.json`).then((module) => module.default);

    return request_dict();
  } catch {
    return {};
  }
}