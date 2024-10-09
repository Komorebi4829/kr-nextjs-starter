import { useTranslations } from 'next-intl'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Features from '@/components/Features'
import Blogs from '@/components/Blogs'
// import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const DynamicShowcase = dynamic(() => import('@/components/Showcase'), {
  loading: () => <p>Loading...</p>,
})

const DynamicFAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  const t = useTranslations('Home')

  return (
    <main className="min-h-screen">
      <Navbar />
      <Header />
      <Features />
      <Blogs />
      <DynamicShowcase />
      <DynamicFAQ />
      <Footer />
    </main>
  )
}
