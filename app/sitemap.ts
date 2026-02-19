import { MetadataRoute } from 'next'
import { LANDINGS } from '@/lib/content'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gofidely.com'

  // Homepage
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // Landing pages
  Object.keys(LANDINGS).forEach((slug) => {
    routes.push({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
  })

  // Blog index
  // routes.push({
  //   url: `${baseUrl}/blog`,
  //   lastModified: new Date(),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.9,
  // })

  // Blog posts
  // const posts = getAllPosts()
  // posts.forEach((post) => {
  //   routes.push({
  //     url: `${baseUrl}/blog/${post.slug}`,
  //     lastModified: new Date(post.date),
  //     changeFrequency: 'weekly' as const,
  //     priority: 0.7,
  //   })
  // })

  return routes
}
