import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Header() {
  const t = useTranslations('Header')

  return (
    <header className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="space-y-6 md:w-1/2">
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">{t('title')}</h1>
            <p className="text-xl md:text-2xl">{t('description')}</p>
            <div>
              <a
                href="#"
                className="inline-block rounded-full bg-white px-8 py-3 font-bold text-purple-600 transition duration-300 hover:bg-gray-100"
              >
                {t('cta')}
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2">
            <Image
              src="/header-image.png"
              alt="Header illustration"
              width={600}
              height={400}
              className="h-auto w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900"></div>
    </header>
  )
}
