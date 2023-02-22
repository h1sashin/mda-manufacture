import React, { PropsWithChildren } from 'react'
import { Stack } from '@mui/material'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Stack direction='column' gap={2} mt={1}>
            {children}
        </Stack>
    )
}
