import React from 'react'
import { typenameToComponent } from './data'
import { WrapperProps } from './types'

const Wrapper: React.FC<WrapperProps> = ({ sections, color }) => {
    return sections ? (
        <>
            {sections.map((section) => {
                const Component = typenameToComponent?.[section.__typename as string]
                if (Component) return React.cloneElement(<Component />, { ...section, color, key: section.id })
                return null
            })}
        </>
    ) : null
}

export default Wrapper
