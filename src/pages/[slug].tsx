import Wrapper from '@/components/Sections/Wrapper'
import { Seo } from '@/components/Seo'
import { client } from '@/graphql/client'
import { GET_PAGE } from '@/graphql/requests/page'
import { GetPageQuery } from '@/graphql/__GENERATED__/graphql'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

const Home: NextPage<GetPageQuery> = ({ page }) => {
    return (
        <div className='flex flex-col gap-8'>
            <Seo {...page?.metaTags} title={page?.metaTags?.title || page?.title} />
            {/* @ts-ignore */}
            <Wrapper sections={page?.sections} color={page?.defaultColor} />
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps<GetPageQuery> = async (ctx) => {
    const slug = ctx.params?.slug
    console.log(slug)
    const resp = await client.query({
        query: GET_PAGE,
        variables: { slug: { eq: slug, neq: '' } }
    })
    if (!resp.data.page)
        return {
            notFound: true
        }
    return {
        props: resp.data
    }
}
