import { getDictionary } from "@/app/i18n";
import HomeIndex from "@/components/home/HomeIndex";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  
  return {
    title: `${dict.Hero.title1}${dict.Hero.title2}${dict.Hero.title3} | ${siteConfig.name}`,
    description: dict.Hero.description,
    keywords: [...siteConfig.keywords],
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      ...siteConfig.openGraph,
      title: `${dict.Hero.title1}${dict.Hero.title2}${dict.Hero.title3} | ${siteConfig.name}`,
      description: dict.Hero.description,
      locale: params.lang,
    },
    twitter: {
      ...siteConfig.twitter,
      title: `${dict.Hero.title1}${dict.Hero.title2}${dict.Hero.title3} | ${siteConfig.name}`,
      description: dict.Hero.description,
    },
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'zh-CN': '/zh',
      },
    },
  };
}

export default async function Home({ params: { lang } }: Props) {
  return <HomeIndex lang={lang} />;
}
