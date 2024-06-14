import { Header } from '@/app/components/Header'
import {notFound} from 'next/navigation'
import React from 'react'
import { client } from '../../../../../sanity/lib/client'
import { House } from '@/app/utils/Interface'
import { VT323 } from 'next/font/google'
import Link from 'next/link'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { urlForImage } from '../../../../../sanity/lib/image'
import { Metadata } from 'next'
import { HouseGallerySlider } from '@/app/components/Slider/HouseGallerySlider'
import { Pill } from '@/app/components/Pill'

interface Params {
	params: {
		slug: string
	}
}
const dateFont =  VT323({weight:"400", subsets:['latin'] })

async function getHouse(slug:string) {
	const query = `
	*[_type == "house" && slug.current == "${slug}"][0] {
		coverImage,
		title,
		slug,
		publishedAt,
		body,
		excerpt,
		gallery,
		"owner": owner->{
	    _id,
	    name
  	},
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

export async function generateMetadata({params}:Params):Promise<Metadata | undefined> {
	const house: House = await getHouse(params?.slug)
	if(!house) {
		return
	}
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	//const imageUrl = post.body?.find(block => block._type === "image");
	return {
		title: house.title,
		description: house.excerpt,
		openGraph: {
			title: house.title,
			description: house.excerpt,
			type: "article",
			locale: "es_ES",
			url: `${baseUrl}/inmuebles/${params.slug}`,
			siteName: "Er Turismo",
			//images: imageUrl
      //  ? [
      //      {
      //        url: urlForImage(imageUrl).width(1200).height(630).url(),
			//				width: 1200,
			//				height:630
      //      },
      //    ]
      //  : [],
		}
	}
}

export default async function page({params} : Params ) {
	const house: House = await getHouse(params?.slug)
	console.log(house.gallery)
	if(!house){
		notFound
	}
	
	return (
		<section className='mb-32'>
			<Header title={house?.title}/>	
			<HouseGallerySlider houseImages={house.gallery} />
			<div className='text-center'>
				
				<div className={richTextStyles}>
					<PortableText 
						value={house.body}
						components={myPortableTextComponents}
					/>
				</div>
				<div className='my-4'>
				<ul className="mb-5 flex list-none flex-col flex-wrap ps-0 md:flex-row mx-auto w-max"
  				role="tablist"
  				data-twe-nav-ref>
					{house?.tags?.map(tag => (
						<Link key={tag._id} href={`/tag/${tag.slug.current}`}>
							<Pill nameTag={tag.name}/>
						</Link>
					))}
					</ul>
				</div>
				<span className={`${dateFont?.className} text-lime-500`}>
					Publicado: {new Date(house?.publishedAt).toDateString()}
				</span>
			</div>
		</section>
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