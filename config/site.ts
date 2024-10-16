import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = "https://github.com/komorebi4829/kr-nextjs-starter";

const baseSiteConfig = {
  name: "Nextjs Landing Starter",
  description:
    "A free, open-source, and powerful landing page boilerplate, ideal for various projects, enabling you to create a landing page in under an hour.",
  url: "https://landingpage.kentriversnook.com",
  ogImage: "https://landingpage.kentriversnook.com/og.png",
  metadataBase: "/",
  keywords: [
    "landing page boilerplate",
    "landing page template",
    "awesome landing page",
    "next.js landing page",
  ],
  authors: [
    {
      name: "Kent River",
      url: "https://landingpage.kentriversnook.com",
      twitter: "https://twitter.com/weijunext",
    },
  ],
  creator: "@Kent",
  openSourceURL: "https://github.com/komorebi4829/kr-nextjs-starter",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "dark", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: "repo", href: OPEN_SOURCE_URL, icon: BsGithub },
    {
      name: "twitter",
      href: "https://twitter.com/weijunext",
      icon: BsTwitterX,
    },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/weijunext",
      icon: SiBuymeacoffee,
    },
  ],
  footerLinks: [
    { name: "email", href: "mailto:weijunext@gmail.com", icon: MdEmail },
    {
      name: "twitter",
      href: "https://twitter.com/weijunext",
      icon: BsTwitterX,
    },
    { name: "github", href: "https://github.com/weijunext/", icon: BsGithub },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/weijunext",
      icon: SiBuymeacoffee,
    },
    {
      name: "juejin",
      href: "https://juejin.cn/user/26044008768029",
      icon: SiJuejin,
    },
    {
      name: "weChat",
      href: "https://weijunext.com/make-a-friend",
      icon: BsWechat,
    },
  ],
  footerProducts: [
    { url: "https://phcopilot.ai/", name: "Product Hunt Copilot" },
    {
      url: "https://landingpage.weijunext.com/",
      name: "Landing Page Boilerplate",
    },
    { url: "https://nextjscn.org/", name: "Next.js 中文文档" },
    { url: "https://nextjs.weijunext.com/", name: "Next.js Practice" },
    {
      url: "https://github.com/weijunext/indie-hacker-tools",
      name: "Indie Hacker Tools",
    },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
