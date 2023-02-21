import { gql } from '@apollo/client'

export const GET_PAGE = gql(/* GraphQL */ `
    query GetPage($slug: SlugFilter) {
        page(filter: { slug: $slug }) {
            id
            title
            defaultColor {
                hex
            }
            metaTags {
                image {
                    url
                    alt
                }
                title
                description
                twitterCard
            }
            sections {
                ... on FaqSectionRecord {
                    id
                    faqSection {
                        question
                        id
                        answer
                    }
                }
                ... on TilesSectionRecord {
                    id
                    description
                    tiles {
                        id
                        text
                    }
                }
                ... on StepperSectionRecord {
                    id
                    title
                    backgroundColor {
                        hex
                    }
                    steps {
                        name
                        description
                        icon {
                            url
                            alt
                        }
                    }
                }
                ... on RichTextSectionRecord {
                    id
                    imagePosition
                    title
                    content
                    image {
                        url
                        alt
                    }
                }
                ... on NavigationRecord {
                    id
                    links {
                        id
                        title
                        slug
                    }
                }
                ... on HeroSectionRecord {
                    id
                    elements {
                        title
                        id
                        description
                        backgroundImage {
                            url
                            alt
                        }
                    }
                }
            }
        }
    }
`)
