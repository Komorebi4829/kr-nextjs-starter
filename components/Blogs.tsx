import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: {
    name: string
    avatar: string
  }
  image: string
}

const BlogCard = ({ post }: { post: BlogPost }) => (
  <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
    <Image src={post.image} alt={post.title} width={400} height={200} className="h-48 w-full object-cover" />
    <div className="p-6">
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={post.author.avatar} alt={post.author.name} width={40} height={40} className="mr-3 rounded-full" />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
          </div>
        </div>
        <Link href={`/blog/${post.id}`} className="font-medium text-purple-600 hover:text-purple-800">
          Read More
        </Link>
      </div>
    </div>
  </div>
)

export default function Blogs() {
  const t = useTranslations('Blogs')

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: t('post1.title'),
      excerpt: t('post1.excerpt'),
      date: t('post1.date'),
      author: {
        name: t('post1.author.name'),
        avatar: '/avatars/author1.jpg',
      },
      image: '/blog-images/post1.jpg',
    },
    {
      id: '2',
      title: t('post2.title'),
      excerpt: t('post2.excerpt'),
      date: t('post2.date'),
      author: {
        name: t('post2.author.name'),
        avatar: '/avatars/author2.jpg',
      },
      image: '/blog-images/post2.jpg',
    },
    {
      id: '3',
      title: t('post3.title'),
      excerpt: t('post3.excerpt'),
      date: t('post3.date'),
      author: {
        name: t('post3.author.name'),
        avatar: '/avatars/author3.jpg',
      },
      image: '/blog-images/post3.jpg',
    },
  ]

  return (
    <section className="bg-gray-100 py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-full bg-purple-600 px-8 py-3 font-bold text-white transition duration-300 hover:bg-purple-700"
          >
            {t('viewAllButton')}
          </Link>
        </div>
      </div>
    </section>
  )
}
