import { Header } from '@/app/components/Header'
import React from 'react'
import { client } from '../../../../../sanity/lib/client'
import { Post } from '@/app/utils/Interface'
import Link from 'next/link'
import { PostComponent } from '@/app/components/PostComponent'

interface Params {
	params: {
		slug: string;
	}
}

async function getPostByTag(tag:string){
	const query = `
	*[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
	`

	const posts = await client.fetch(query)
	return posts
}

export default async function page({params}:Params) {
	const posts: Array<Post> = await getPostByTag(params.slug)
	return (
		<div>
			<Header title={`${params?.slug}`} tags/>
			<div>
				{posts?.length > 0 && posts?.map(post => (
					<PostComponent key={post?._id} post={post} />
				))}
			</div>
		</div>
	)
}
