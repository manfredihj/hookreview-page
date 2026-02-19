import { notFound } from 'next/navigation'
import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { isValidLocale, type Locale } from '@/lib/i18n/config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Aprende sobre automatización con IA, WhatsApp Business, recuperación de carritos y más.',
  openGraph: {
    title: 'Blog - gofidely',
    description: 'Aprende sobre automatización con IA, WhatsApp Business, recuperación de carritos y más.',
    type: 'website',
  },
}

type Props = {
  params: Promise<{ locale: string }>
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const posts = getAllPosts()

  if (!isValidLocale(locale)) {
    notFound()
  }

  const t = await getDictionary(locale as Locale)

  return (
    <>
      <Navbar t={t} locale={locale as Locale} />
      <main className="min-h-screen pt-20">
        <div className="container py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Aprende sobre automatización con IA, WhatsApp Business, recuperación de carritos y más.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-white/70 text-lg">
                Próximamente publicaremos artículos sobre automatización con IA.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-brand-green/50 transition-all"
                >
                  {post.image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('es-AR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/70 mb-4">{post.excerpt}</p>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-brand-green/20 text-brand-green px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer t={t} />
    </>
  )
}
