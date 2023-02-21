import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TilesSectionProps } from './types'

const TilesSection: React.FC<TilesSectionProps> = ({ tiles, color }) => {
    const wrapperClass = [tiles.length === 2 ? `grid-cols-2` : 'grid-cols-4', 'grid container gap-2'].join(' ')
    return (
        <section className={wrapperClass}>
            {tiles.map((t) => (
                <Link
                    href={t.link?.slug || '/'}
                    style={{ background: color.hex }}
                    className='relative flex h-96 flex-col items-center justify-center gap-2 bg-opacity-50 p-4'
                >
                    {t.backgroundImage && (
                        <Image
                            src={t.backgroundImage?.url || ''}
                            alt={t.backgroundImage.alt ?? ''}
                            fill
                            className='-z-10 object-cover object-center'
                        />
                    )}
                    <h4 className='text-3xl font-bold text-black'>{t.text}</h4>
                </Link>
            ))}
        </section>
    )
}

export default TilesSection
