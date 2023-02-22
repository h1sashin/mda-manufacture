import { Container, Grid, Stack, Typography, Paper } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { StepperSectionProps } from './types'

const StepperSection: React.FC<StepperSectionProps> = ({ backgroundColor, steps, title }) => {
    return (
        <Container>
            <Grid container spacing={4}>
                {steps.map((step) => (
                    <Grid item xs={12} md={12 / steps.length} key={step.id}>
                        <Paper
                            elevation={1}
                            component={Stack}
                            direction='column'
                            alignItems='center'
                            justifyContent='flex-start'
                            gap={1}
                            height='100%'
                            py={1}
                            // sx={{
                            //     borderBottom: { xs: '1px solid gray', md: 'none' },
                            //     borderRight: { xs: 'none', md: '1px solid gray' }
                            // }}
                        >
                            <Image src={step.icon?.url || ''} alt={step.icon?.alt || ''} width={128} height={128} />
                            <Typography color='Highlight' fontWeight={700} align='center' variant='h5'>
                                {step.name}
                            </Typography>
                            <Typography align='center' variant='body1' color='GrayText'>
                                {step.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default StepperSection
