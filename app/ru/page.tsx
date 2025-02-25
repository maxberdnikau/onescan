import type { Metadata } from "next";

import HomeComponent from "app/pages/home";
import { seo_builder } from "app/components/seo";

export const metadata: Metadata = seo_builder({
    title: 'Профессиональная проверка и индивидуальный подбор автомобилей',
    description: 'Каждый автомобиль детально проверяем. Мы ценим вас и ваше время.',
    canonical: '/ru'
  });

export default async function HomeRU() {
    return (
        <HomeComponent lang="ru" />
    );
  }
  