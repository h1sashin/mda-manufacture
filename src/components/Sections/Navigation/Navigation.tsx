import Image from 'next/image'
import Link from 'next/link'
import { NavigationProps } from './types'

const Navigation: React.FC<NavigationProps> = ({ links, logo, color }) => {
    return (
        <header style={{ background: color.hex }} className='fixed top-0 left-0 z-50 h-16 w-full'>
            <div className='container flex w-full items-center justify-between'>
                <Image src={logo?.url || '/images/logo.png'} width={128} height={64} alt={logo?.alt || 'LOGO'} />
                <nav>
                    {links.map((link) => (
                        <Link key={link.id} href={link.slug ?? '/'}>
                            {link.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Navigation
