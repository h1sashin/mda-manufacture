import Image from 'next/image'
import React from 'react'
import { HeroProps } from './types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Hero: React.FC<HeroProps> = ({ elements }) => {
    return (
        <section className='-order-1'>
            <Swiper
                navigation
                modules={elements.length > 0 ? [Navigation, Pagination] : []}
                className='h-[32rem] w-full'
                spaceBetween={0}
                slidesPerView={1}
                style={{
                    // @ts-ignore
                    '--swiper-pagination-color': '#fff',
                    '--swiper-navigation-color': '#fff'
                }}
                pagination={{ clickable: true }}
                color='white'
                autoplay={{ delay: 5000 }}
            >
                {elements.map((el) => (
                    <SwiperSlide key={el.id} className='relative h-[32rem] bg-black bg-opacity-50'>
                        <Image
                            src={el.backgroundImage?.url || ''}
                            alt={el.backgroundImage?.alt || ''}
                            fill
                            className='-z-10 object-cover object-center'
                        />
                        <div className='flex h-full flex-col justify-center gap-4 px-32 backdrop-blur-sm'>
                            <div className='absolute left-0 top-0 -z-10 h-full w-full bg-black bg-opacity-25' />
                            <h1 className='text-center text-5xl font-bold text-white'>{el.title}</h1>
                            {el.description && (
                                <p className='text-center text-3xl font-medium text-slate-100'>{el.description}</p>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Hero
