import React from 'react'
import { client } from '../../../../sanity/lib/client'
import { Tag } from '@/app/utils/Interface'
import { Header } from '@/app/components/Header'
import Link from 'next/link'
import { Metadata } from 'next'

async function getAllTags() {
  const query = `
*[_type == "tag"] {
	_id,
	name,
	slug,
	"postCount": count(*[_type == "post" && references("tags", ^._id)])
}
`
  const tags = client.fetch(query)
  return tags
}

export const revalidate = 60
export const metadata: Metadata = {
	title: 'Tags',
	description: 'Search for posts by tags'
}
export default async function page() {
  const tags: Tag[] = await getAllTags()
  return(
		<div>
			<Header title="Tags" />
			<div>
				{tags?.length > 0 && tags?.map(tag => (
					<Link key={tag._id} href={`/tag/${tag.slug.current}`}>
						<div className='mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500'>
							#{tag.name} ({tag?.postCount})
						</div>
					</Link>
				))}
			</div>
		</div>
	) 
}
