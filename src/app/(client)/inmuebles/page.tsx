import { CardHouse } from '@/app/components/CardHouse/CardHouse'
import { client } from '../../../../sanity/lib/client'
import { Header } from '@/app/components/Header'
import { House } from '@/app/utils/Interface'
import Link from 'next/link'

async function getHouses() {
	const query = `
	*[_type =="house"] {
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

//nextjs, automatically does the caching for us
export const revalidate = 60;

export default async function Home() {
	const houses: Array<House> = await getHouses()
	//console.log("posts", posts)
  return (
    <section>
			<Header title="ARTICULOS" propietarios/>
			<div className='grid grid-cols-3 gap-x-4 gap-y-16'>
				{houses?.length > 0 && houses?.map((house) => (
					<Link className='card-link' key={house._id} href={`/inmuebles/${house.slug.current}`}>
						<CardHouse house={house} />
					</Link>
				))}
			</div>
		</section>
  );
}
