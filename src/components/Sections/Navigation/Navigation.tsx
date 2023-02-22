import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Toolbar,
    Typography
} from '@mui/material'
import { Spin as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { NavigationProps } from './types'

const Navigation: React.FC<NavigationProps> = ({ links, logo, color }) => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const toggleDrawer = () => setMobileOpen((prev) => !prev)
    const container = typeof window !== 'undefined' ? () => window.document.body : undefined
    return (
        <>
            <AppBar position='fixed' component='header'>
                <Container>
                    <Toolbar disableGutters>
                        <Image
                            src={logo?.url || '/images/logo.png'}
                            width={128}
                            height={64}
                            alt={logo?.alt || 'LOGO'}
                        />
                        <Box sx={{ flexGrow: 1 }} />
                        <Box component='nav' sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton>
                                <Hamburger color='#fff' toggled={mobileOpen} onToggle={toggleDrawer} />
                            </IconButton>
                        </Box>
                        <Box component='nav' sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {links.map((link) => (
                                <Link style={{ textDecoration: 'none' }} key={link.id} href={link.slug ?? '/'}>
                                    <Button sx={{ color: '#fff' }} key={link.id}>
                                        {link.title}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component='nav'>
                <Drawer
                    anchor='right'
                    variant='temporary'
                    container={container}
                    open={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 360 }
                    }}
                >
                    <List sx={{ flexGrow: 1, disaply: { xs: 'none', md: 'flex' } }}>
                        {links.map((link) => (
                            <Link style={{ textDecoration: 'none' }} key={link.id} href={link.slug ?? '/'}>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText>{link.title}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Drawer>
            </Box>
        </>
    )
}

export default Navigation
