import { MetadataRoute } from 'next'
import { client } from '../../sanity/lib/client'
import { Post } from './utils/Interface'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  async function getPosts() {
    const query = `
		*[_type =="post"] {
			title,
			slug,
			publishedAt,
			excerpt,
			tags[]->{
				_id,
				slug,
				name
			}
		}
		`
    const data = await client.fetch(query)
    return data
  }
  const posts: Post[] = await getPosts()
  const postsUrls = posts.map((post) => ({
    url: `https://blog-sanity-orcin.vercel.app/posts/${post.slug}`,
    lastModified: new Date(post.publishedAt)
  }))
  return [
    {
      url: 'https://blog-sanity-orcin.vercel.app/',
      lastModified: new Date()
    },
    {
      url: 'https://blog-sanity-orcin.vercel.app/tag',
      lastModified: new Date()
    },
    ...postsUrls
  ]
}
