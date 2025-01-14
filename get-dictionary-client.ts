type Locale = ["ru", "cs"][number];

export const get_dictionary = async (
  path: string = '',
  locale: Locale = 'cs',
  // component: ComponentType
) => {
  try {
    const request_dict = () => import(`./dictionaries${path}/${locale}.json`).then((module) => module.default);

    return request_dict();
  } catch {
    return {};
  }
}