import Head from 'next/head'
import React from 'react'
import { SeoProps } from './types'

export const Seo: React.FC<SeoProps> = ({ description, image, title, twitterCard }) => {
    return (
        <Head>
            <title>{title!}</title>
            <meta name='description' content={description!} />
            <meta name='image' content={image?.url!} />
            <meta name='twitter:card' content={twitterCard!} />
            <meta name='twitter:site' content='@site' />
            <meta name='twitter:title' content={title!} />
            <meta name='twitter:description' content={description!} />
            <meta name='twitter:image' content={image?.url!} />
            <meta property='og:url' content='https://example.com' />
            <meta property='og:title' content={title!} />
            <meta property='og:description' content={description!} />
            <meta property='og:image' content={image?.url!} />
        </Head>
    )
}
