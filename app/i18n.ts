import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const locales = ["", "en", "en-US", "zh", "zh-CN", "zh-TW", 'zh-HK', 'ja', "ar", "es", "ru"];
export const localeNames: any = {
  en: "🇺🇸 English",
  zh: "🇨🇳 中文",
  ja: "🇯🇵 日本語",
  ar: "🇸🇦 العربية",
  es: "🇪🇸 Español",
  ru: "🇷🇺 Русский",
};
export const defaultLocale = "en";

// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
export function getLocale(headers: any): string {
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

const i18nMaps: any = {
  en: () => import("@/locales/en_US.json").then((module) => module.default),
  zh: () => import("@/locales/zh_CN.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
    locale = "zh";
  }

  if (!Object.keys(i18nMaps).includes(locale)) {
    locale = "en";
  }

  return i18nMaps[locale]();
};
