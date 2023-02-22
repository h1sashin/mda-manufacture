import Image from 'next/image'
import React from 'react'
import { HeroProps } from './types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Box, Paper, Stack, Typography } from '@mui/material'

const Hero: React.FC<HeroProps> = ({ elements }) => {
    return (
        <Box component='section' sx={{ order: '-1' }}>
            <Box
                component={Swiper}
                navigation
                modules={elements.length > 0 ? [Navigation, Pagination] : []}
                spaceBetween={0}
                slidesPerView={1}
                sx={{
                    height: '32rem',
                    // @ts-ignore
                    '--swiper-pagination-color': '#fff',
                    '--swiper-navigation-color': '#fff'
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
            >
                {elements.map((el) => (
                    <SwiperSlide key={el.id} style={{ position: 'relative' }}>
                        <Box
                            component={Image}
                            src={el.backgroundImage?.url || ''}
                            alt={el.backgroundImage?.alt || ''}
                            fill
                            sx={{ zIndex: -1, objectFit: 'cover', objectPosition: 'center' }}
                        />
                        <Stack direction='column' justifyContent='center' height='100%' width='100%' gap={2}>
                            <Box
                                height='100%'
                                width='100%'
                                position='absolute'
                                top={0}
                                left={0}
                                sx={{
                                    zIndex: -1,

                                    background: 'rgba(0,0,0,0.25)',
                                    backdropFilter: 'blur(4px)'
                                }}
                            />
                            <Typography variant='h1' align='center' fontWeight={700}>
                                {el.title}
                            </Typography>
                            {el.description && (
                                <Typography className='text-center text-3xl font-medium text-slate-100'>
                                    {el.description}
                                </Typography>
                            )}
                        </Stack>
                    </SwiperSlide>
                ))}
            </Box>
        </Box>
    )
}

export default Hero
