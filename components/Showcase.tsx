import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FiMonitor, FiSmartphone, FiTablet } from 'react-icons/fi'
import { motion } from 'framer-motion'

interface ShowcaseItem {
  title: string
  description: string
  image: string
}

const DeviceButton = ({ icon: Icon, active, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`rounded-full p-2 ${active ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}
    onClick={onClick}
  >
    <Icon className="h-6 w-6" />
  </motion.button>
)
export default function Showcase() {
  const t = useTranslations('Showcase')
  const [activeDevice, setActiveDevice] = useState('desktop')

  const showcaseItems: ShowcaseItem[] = [
    {
      title: t('item1.title'),
      description: t('item1.description'),
      image: '/showcase/desktop1.png',
    },
    {
      title: t('item2.title'),
      description: t('item2.description'),
      image: '/showcase/desktop2.png',
    },
    {
      title: t('item3.title'),
      description: t('item3.description'),
      image: '/showcase/desktop3.png',
    },
  ]

  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
        </div>

        <div className="mb-8 flex justify-center space-x-4">
          <DeviceButton icon={FiMonitor} active={activeDevice === 'desktop'} onClick={() => setActiveDevice('desktop')} />
          <DeviceButton icon={FiTablet} active={activeDevice === 'tablet'} onClick={() => setActiveDevice('tablet')} />
          <DeviceButton icon={FiSmartphone} active={activeDevice === 'mobile'} onClick={() => setActiveDevice('mobile')} />
        </div>

        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-8">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800"
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative">
              <div className={`${activeDevice !== 'desktop' ? 'hidden' : ''}`}>
                <Image src="/showcase/desktop-frame.png" alt="Desktop Frame" width={800} height={600} className="h-auto w-full" />
                <div className="absolute bottom-[15%] left-[11%] right-[11%] top-[5%] overflow-hidden">
                  <Image src={showcaseItems[0].image} alt={showcaseItems[0].title} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className={`${activeDevice !== 'tablet' ? 'hidden' : ''}`}>
                <Image src="/showcase/tablet-frame.png" alt="Tablet Frame" width={600} height={800} className="h-auto w-full" />
                <div className="absolute bottom-[7%] left-[6%] right-[6%] top-[7%] overflow-hidden">
                  <Image
                    src={showcaseItems[0].image.replace('desktop', 'tablet')}
                    alt={showcaseItems[0].title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={`${activeDevice !== 'mobile' ? 'hidden' : ''}`}>
                <Image src="/showcase/mobile-frame.png" alt="Mobile Frame" width={300} height={600} className="h-auto w-full" />
                <div className="absolute bottom-[9%] left-[5%] right-[5%] top-[7%] overflow-hidden">
                  <Image
                    src={showcaseItems[0].image.replace('desktop', 'mobile')}
                    alt={showcaseItems[0].title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
