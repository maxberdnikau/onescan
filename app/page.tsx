import type { Metadata } from "next";

import HomeComponent from "app/pages/home";

import { seo_builder } from "app/components/seo";

export const metadata: Metadata = seo_builder({
  title: 'Профессиональная проверка и индивидуальный подбор автомобилей в Чехии'
});

export default function Home() {
  return (
    <HomeComponent lang="cs" />
  );
}
