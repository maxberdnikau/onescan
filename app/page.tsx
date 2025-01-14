import type { Metadata } from "next";

import HomeComponent from "app/pages/home";

import { seo_builder } from "app/components/seo";

export const metadata: Metadata = seo_builder({
  title: "Onescan"
});

export default function Home() {
  return (
    <HomeComponent lang="cs" />
  );
}
