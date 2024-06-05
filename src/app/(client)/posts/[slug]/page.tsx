import { Header } from '@/app/components/Header'
import {notFound} from 'next/navigation'
import React from 'react'
import { client } from '../../../../../sanity/lib/client'
import { Post } from '@/app/utils/Interface'
import { VT323 } from 'next/font/google'
import Link from 'next/link'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { urlForImage } from '../../../../../sanity/lib/image'

interface Params {
	params: {
		slug: string
	}
}
const dateFont =  VT323({weight:"400", subsets:['latin'] })

async function getPost(slug:string) {
	const query = `
	*[_type == "post" && slug.current == "${slug}"][0] {
		title,
		slug,
		publishedAt,
		body,
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

export const revalidate = 60


export default async function page({params} : Params ) {
	console.log({params})
	const post: Post = await getPost(params?.slug)

	if(!post){
		notFound
	}
	
	return (
		<div>
			<Header title={post?.title}/>
			<div className='text-center'>
				<span className={`${dateFont?.className} text-purple-500`}>
					{new Date(post?.publishedAt).toDateString()}
				</span>
				<div className='mt-5'>
					{post?.tags?.map(tag => (
						<Link key={tag._id} href={`/tag/${tag.slug.current}`}><span className='mr-2 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900'>{tag.name}</span></Link>
					))}
				</div>
				<div className={richTextStyles}>
				<PortableText 
					value={post.body}
					components={myPortableTextComponents}

				/>
					</div>
			</div>
		</div>
	)
}

const myPortableTextComponents = {
  types: {
    image: ({value}:any) => <Image src={urlForImage(value)} alt="post" height={700} width={700}/>,
  }
}

const richTextStyles = `
	mt-14
	text-justify
	max-w-2xl
	m-auto
	prose-headings:my-5
	prose-headings:text-2xl
	prose-p:mb-5
	prose-p:leading-7
	prose-li:list-disc
	prose-li:leading-7
	prose-li:ml-4
`