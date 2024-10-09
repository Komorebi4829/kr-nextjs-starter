import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

const SocialIcon = ({ icon: Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors duration-300 hover:text-gray-300">
    <Icon className="h-6 w-6" />
  </a>
)

export default function Footer() {
  const t = useTranslations('Footer')

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('companyName')}</h3>
            <p className="text-gray-400">{t('companyDescription')}</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('products')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/product1" className="text-gray-400 transition-colors duration-300 hover:text-white">
                  {t('product1')}
                </Link>
              </li>
              <li>
                <Link href="/product2" className="text-gray-400 transition-colors duration-300 hover:text-white">
                  {t('product2')}
                </Link>
              </li>
              <li>
                <Link href="/product3" className="text-gray-400 transition-colors duration-300 hover:text-white">
                  {t('product3')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 transition-colors duration-300 hover:text-white">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 transition-colors duration-300 hover:text-white">
                  {t('careers')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 transition-colors duration-300 hover:text-white">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 transition-colors duration-300 hover:text-white">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 transition-colors duration-300 hover:text-white">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
          <p className="text-gray-400">
            © {currentYear} {t('companyName')}. {t('allRightsReserved')}
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <SocialIcon icon={FiTwitter} href="https://twitter.com/yourcompany" />
            <SocialIcon icon={FiFacebook} href="https://facebook.com/yourcompany" />
            <SocialIcon icon={FiInstagram} href="https://instagram.com/yourcompany" />
            <SocialIcon icon={FiLinkedin} href="https://linkedin.com/company/yourcompany" />
          </div>
        </div>
      </div>
    </footer>
  )
}
