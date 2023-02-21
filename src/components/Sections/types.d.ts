import { GetPageQuery, PageModelSectionsField } from '@/graphql/__GENERATED__/graphql'
import { DefaultProps } from 'pages'

export interface WrapperProps extends DefaultProps {
    sections?: PageModelSectionsField[]
}
