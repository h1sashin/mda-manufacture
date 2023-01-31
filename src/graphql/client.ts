import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const uri = process.env.CMS_API_URL

const httpLink = new HttpLink({
    uri,
    headers: {
        Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
        'X-Include-Drafts': process.env.STAGE !== 'production' ? 'true' : 'false'
    }
})

export const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
    link: httpLink
})
