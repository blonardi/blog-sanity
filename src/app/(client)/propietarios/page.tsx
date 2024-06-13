import React from 'react'
import { client } from '../../../../sanity/lib/client'
import { Owner } from '@/app/utils/Interface'
import { Header } from '@/app/components/Header'
import Link from 'next/link'
import { Metadata } from 'next'

async function getAllOwners() {
  const query = `
*[_type == "owner"] {
	_id,
	name,
	slug,
	"houseCount": count(*[_type == "house"  && references("owner", ^._id)]),
}
`
  const owners = client.fetch(query)
  return owners
}

export const revalidate = 60
export const metadata: Metadata = {
	title: 'Propietarios',
	description: 'Buscar casas por propietarios'
}
export default async function page() {
  const owners: Owner[] = await getAllOwners()
  return(
		<div>
			<Header title="Propietarios" />
			<div>
				{owners?.length > 0 && owners?.map(owner => (
					<Link key={owner._id} href={`/propietarios/${owner.slug.current}`}>
						<div className='mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-lime-500'>
							#{owner.name} ({owner?.houseCount})
						</div>
					</Link>
				))}
			</div>
		</div>
	) 
}
