import Hero from '@/components/Hero/Hero'
import { Seo } from '@/components/Seo'
import { Tile } from '@/components/Tile'
import { client } from '@/graphql/client'
import { GET_HOME } from '@/graphql/requests/getHome'
import { GetHomeQuery, SiteLocale } from '@/graphql/__GENERATED__/graphql'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

const Home: NextPage<GetHomeQuery> = ({ home }) => {
    return (
        <div className='flex flex-col gap-8'>
            <Seo {...home?.seo} />
            <Hero {...home} />
            <div className='container'>
                <div className='grid grid-flow-col gap-2'>
                    {home?.tiles.map((tile) => (
                        <Tile
                            key={tile.id}
                            description={tile.description}
                            link='/'
                            title={tile.name}
                            image={tile.backgroundImage?.url}
                        />
                    ))}
                </div>
            </div>
            <div className='container flex flex-col gap-4'>
                <div className='relative flex items-center justify-center before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-1 before:w-full before:-translate-y-1/2 before:-translate-x-1/2 before:bg-black'>
                    <h2 className='bg-slate-200 px-4 text-center text-2xl font-bold'>{home?.aboutTitle}</h2>
                </div>
                <div className='prose w-full' dangerouslySetInnerHTML={{ __html: home?.aboutContent || '' }} />
            </div>
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps<GetHomeQuery> = async ({ locale, locales }) => {
    const resp = await client.query({
        query: GET_HOME,
        // @ts-ignore
        variables: { locale: SiteLocale[locale], fallbackLocales: locales.map((l) => SiteLocale[l]) }
    })
    return {
        props: resp.data
    }
}
