import { Header } from '@/app/components/Header'
import React from 'react'
import { client } from '../../../../../sanity/lib/client'
import { House } from '@/app/utils/Interface'
import Link from 'next/link'
import { CardHouse } from '@/app/components/CardHouse/CardHouse'

interface Params {
  params: {
    slug: string
  }
}

async function getHouseByOwner(owner: string) {
  const query = `
	*[_type == "house" && references(*[_type == "owner" && slug.current == "${owner}"]._id)]{
  coverImage,
	title,
	slug,
	publishedAt,
	excerpt,
	capacity,
	"owner": owner->{
	  _id,
	  name
  },
  tags[]-> {
		_id,
		slug,
    name
  }
  }
	`

  const houses = await client.fetch(query)
  return houses
}

export async function generateMetadata({params}: Params) {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

	return {
		title: `#${params.slug}`,
		description: `Houses with the owner ${params.slug}`,
		openGraph: {
			title: `#${params.slug}`,
			description: `Houses with the owner ${params.slug}`,
			type: 'website',
			locale: 'es_ES',
			url: `${baseUrl}/propietarios/${params.slug}`,
			siteName: 'ER Turismo'
		}
	}
}

export default async function page({ params }: Params) {
  const houses: Array<House> = await getHouseByOwner(params.slug)
  console.log({ houses })
  return (
    <div>
      <Header title={`${params?.slug}`} tags />
      <div className='grid grid-cols-3 gap-x-4 gap-y-16'>
        {houses?.length > 0 &&
          houses?.map((house) => (<Link className='card-link' key={house._id} href={`/inmuebles/${house.slug.current}`}>
					<CardHouse house={house} />
				</Link>))}
      </div>
    </div>
  )
}
