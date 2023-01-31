import Image from 'next/image'
import React from 'react'
import { HeroProps } from './types'

const Hero: React.FC<HeroProps> = ({ backgroundImage, subtitle, title }) => {
    return (
        <div className='relative h-[32rem] bg-black bg-opacity-50'>
            <Image
                src={backgroundImage?.url || ''}
                alt={backgroundImage?.alt || ''}
                fill
                className='-z-10 object-cover object-center'
            />

            <div className='container flex h-full w-full flex-col justify-center gap-8 px-32'>
                <h1 className='text-5xl font-bold text-white'>{title}</h1>
                <p className='text-3xl font-medium text-slate-200'>{subtitle}</p>
            </div>
        </div>
    )
}

export default Hero
