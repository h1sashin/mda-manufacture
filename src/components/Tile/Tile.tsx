import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TileProps } from './types'

export const Tile: React.FC<TileProps> = ({ description, image, link, title }) => {
    return (
        <Link
            href={link || '/'}
            className='relative flex h-96 flex-col items-center justify-center gap-2 bg-black bg-opacity-50 p-4'
        >
            <Image src={image || '/'} alt='image' fill className='-z-10 object-cover object-center' />
            <h4 className='text-3xl font-bold text-white'>{title}</h4>
            <p className='text-xl text-white'>{description}</p>
        </Link>
    )
}
