import { SeoField } from '@/graphql/__GENERATED__/graphql'

export interface SeoProps {
    title?: string | null
    description?: string | null
    image?: {
        url?: string | null
    } | null
    twitterCard?: string | null
}
