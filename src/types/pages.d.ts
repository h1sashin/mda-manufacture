import { Page } from '@/graphql/selectors/page.selector'
import { ColorField } from '@/graphql/__GENERATED__/graphql'

declare module 'pages' {
    export interface DefaultProps {
        color: ColorField
    }
    export interface Subpage {
        page: Page
    }
}
