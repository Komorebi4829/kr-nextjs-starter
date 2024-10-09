import { createIntl } from 'next-intl'

export const locales = ['en', 'zh']

export function getIntl(locale: string) {
  return createIntl({
    locale,
    messages: require(`../messages/${locale}.json`),
  })
}
