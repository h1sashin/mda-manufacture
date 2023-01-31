import Image from 'next/image'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <header className='fixed top-0 left-0 z-50 h-16 w-screen bg-white'>
                <div className='container flex w-full items-center justify-between'>
                    <Image src='/images/logo.png' width={128} height={64} alt='logo' />
                    <nav>
                        <Link href='/gallery'>Gallery</Link>
                    </nav>
                </div>
            </header>
            <main className='mt-16 flex w-screen flex-col gap-2'>{children}</main>
        </div>
    )
}
