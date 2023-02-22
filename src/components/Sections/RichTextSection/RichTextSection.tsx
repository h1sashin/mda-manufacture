import { Box, Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { RichTextSectionProps } from './types'

const RichTextSection: React.FC<RichTextSectionProps> = ({ content, image, imagePosition, title }) => {
    return (
        <Container component='section'>
            <Grid container spacing={4}>
                {image && (
                    <Grid item xs={12} md={6} lg={5} order={{ md: imagePosition === 'left' ? -1 : 1 }}>
                        <Box position='relative' height='100%' minHeight={267}>
                            <Image
                                src={image.url}
                                alt={image.alt || 'Section image'}
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />
                        </Box>
                    </Grid>
                )}
                <Grid item xs={12} {...(image && { md: 6, lg: 7 })}>
                    <Typography variant='body1' component='div' dangerouslySetInnerHTML={{ __html: content || '' }} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default RichTextSection
