import { Container, Typography, Grid, Stack, Paper } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TilesSectionProps } from './types'

const TilesSection: React.FC<TilesSectionProps> = ({ tiles, color }) => {
    return (
        <Container component='section'>
            <Grid container spacing={1}>
                {tiles.map((t) => (
                    <Grid
                        item
                        component={Link}
                        href={t.link?.slug || '/'}
                        xs={12}
                        sm={(12 / tiles.length) * 2}
                        md={12 / tiles.length}
                        sx={{ textDecoration: 'none' }}
                    >
                        <Paper
                            elevation={1}
                            component={Stack}
                            style={{ background: color.hex }}
                            minHeight={256}
                            alignItems='center'
                            justifyContent='center'
                        >
                            {t.backgroundImage && (
                                <Image src={t.backgroundImage?.url || ''} alt={t.backgroundImage.alt ?? ''} fill />
                            )}
                            <Typography variant='h4' color='Highlight' fontWeight={600} align='center'>
                                {t.text}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default TilesSection
