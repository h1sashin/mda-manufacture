import { graphql } from '../__GENERATED__'

export const GET_HOME = graphql(/* GraphQL */ `
    query GetHome($locale: SiteLocale, $fallbackLocales: [SiteLocale!]) {
        home(locale: $locale, fallbackLocales: $fallbackLocales) {
            title
            subtitle
            backgroundImage {
                url
                alt
            }
            tiles {
                backgroundImage {
                    url
                    alt
                }
                description
                id
                name
                redirectPath
            }
            aboutTitle
            aboutContent
            seo(locale: $locale, fallbackLocales: $fallbackLocales) {
                title
                description
                image {
                    url
                }
                twitterCard
            }
        }
    }
`)
