'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.css'
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image';

interface Image {
  asset: {
    _ref: string;
  };
  alt?: string;
}

interface House {
  houseImages: Image[];
}

interface Props {
  house: House;
}

export function HouseGallerySlider ({ houseImages }: House) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
			navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      pagination={{ type: 'fraction' }}
			loop={true}
			className='h-[640px]'
			>
      {houseImages.map((image, index) => (
        <SwiperSlide key={index}>
          <Image 
            src={urlForImage(image.asset._ref)}
						width={400}
						height={300} 
            alt={image.alt || `Image ${index + 1}`}
            className="w-full h-auto object-none"
          />
        </SwiperSlide>
      ))}
			<div className="swiper-button-next custom-swiper-button" />
      <div className="swiper-button-prev custom-swiper-button" />
    </Swiper>
  );
};

const cardStyle = `
mb-8
p-4
border
border-gray-900
rounded-md
shadow-sm
shadow-lime-950
hover:shadow-md
hover:bg-lime-500
hover:text-white
hover:dark:bg-gray-950
`
export default HouseGallerySlider;