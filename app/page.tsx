import type { Metadata } from "next";

import HomeComponent from "@/app/pages/home";

import { seo_builder } from "app/components/seo";

export const metadata: Metadata = seo_builder({
  title: 'Profesionální kontrola a individuální výběr aut',
  description: 'Každé auto důkladně kontrolujeme. Vážíme si vás i vašeho času.'
});

export default function Home() {
  return (
    <HomeComponent lang="cs" />
  );
}
