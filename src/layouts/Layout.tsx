import React, { PropsWithChildren } from 'react'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <main className='mt-16 flex w-full flex-col gap-2'>{children}</main>
        </div>
    )
}
