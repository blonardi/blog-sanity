// import './card.css'
import React from 'react'
import { House } from '@/app/utils/Interface'
import Image from 'next/image'
import { urlForImage } from '../../../../sanity/lib/image'
//import Image from 'next/image'
//import { House } from '@/types';
//import { ItemCard } from '../ItemCard/ItemCard.jsx'
// import { Link } from 'react-router-dom'

interface CardProps {
  house: House
}

export function CardHouse({ house }: CardProps) {
  return (
    // <Link classNameName='card-link' key={permalink} href={`/house/${permalink}`}>

    <article className='antialiased font-sans max-h-[340px] h-full'>
      <div className='max-w-6xl mx-auto'>
        <div className='max-w w-full'>
          <div className='bg-stone-200 flex flex-col shadow-xl rounded-lg overflow-hidden dark:bg-lime-50 dark:shadow-xl dark:shadow-bg-lime-50'>
            <div className='bg-cover bg-center mb-4'>
              <Image className='w-full h-48 object-cover' src={urlForImage(house.coverImage)} alt={house.title} width={300} height={200} />
            </div>
            <section className='flex gap-2 px-4'>
              {house?.tags?.map((tag) => (
                  <div key={tag._id}>
                    <span className='bg-teal-600 rounded-full shadow-md font-semibold text-sm text-teal-50 block py-1 px-2'>
                      {tag.name}
                    </span>
                  </div>
                ))}
            </section>
            <div className='px-4 py-2'>
              <p className='uppercase tracking-wide text-md font-bold text-gray-700'>
                {house?.title}
              </p>
              <p className='text-md text-gray-900'>{house.excerpt}</p>
              <p className='text-gray-700'>
                {`Capacidad ${house.capacity} personas`}
              </p>
            </div>
            <div className='flex justify-center items-center px-2 py-2 border-t border-gray-300 text-gray-700'>
              <div className='flex-1 justify-center inline-flex'>
                <svg
                  className='h-6 w-6 text-gray-600 fill-current mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z'></path>
                </svg>
                <p>
                  <span className='text-gray-900 font-semibold'>
                    {house.capacity}
                  </span>
                </p>
              </div>
              <div className='flex-1 justify-center items-center inline-flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 text-gray-600 fill-current mr-2'
                >
                  <path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
                  <path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
                </svg>
                <p>
                  <span className='text-gray-900 font-semibold'>
									{house.owner.name}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

  )
}

