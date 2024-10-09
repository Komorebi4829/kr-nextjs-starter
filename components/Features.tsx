import { useTranslations } from 'next-intl'
import { IconType } from 'react-icons'
import { FiBox, FiLock, FiRefreshCw, FiTrendingUp } from 'react-icons/fi'

interface FeatureProps {
  icon: IconType
  title: string
  description: string
}

const Feature = ({ icon: Icon, title, description }: FeatureProps) => (
  <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
    <Icon className="mb-4 h-12 w-12 text-purple-600" />
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-center text-gray-600 dark:text-gray-300">{description}</p>
  </div>
)

export default function Features() {
  const t = useTranslations('Features')

  const features = [
    { icon: FiBox, title: t('feature1.title'), description: t('feature1.description') },
    { icon: FiLock, title: t('feature2.title'), description: t('feature2.description') },
    { icon: FiRefreshCw, title: t('feature3.title'), description: t('feature3.description') },
    { icon: FiTrendingUp, title: t('feature4.title'), description: t('feature4.description') },
  ]

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
