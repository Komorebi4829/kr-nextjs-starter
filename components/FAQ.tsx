import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface FAQItem {
  question: string
  answer: string
}

const FAQItem = ({ item, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button className="flex w-full items-center justify-between py-4 text-left" onClick={toggleOpen}>
        <span className="text-lg font-medium text-gray-900 dark:text-white">{item.question}</span>
        {isOpen ? <FiChevronUp className="h-5 w-5 text-purple-600" /> : <FiChevronDown className="h-5 w-5 text-purple-600" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-4 text-gray-600 dark:text-gray-300">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const t = useTranslations('FAQ')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    { question: t('q1'), answer: t('a1') },
    { question: t('q2'), answer: t('a2') },
    { question: t('q3'), answer: t('a3') },
    { question: t('q4'), answer: t('a4') },
    { question: t('q5'), answer: t('a5') },
  ]

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
