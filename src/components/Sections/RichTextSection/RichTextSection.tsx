import Image from 'next/image'
import { RichTextSectionProps } from './types'

const RichTextSection: React.FC<RichTextSectionProps> = ({ content, image, imagePosition, title }) => {
    const wrapperClass = [image ? 'grid-cols-3' : 'grid-cols-1', 'grid gap-8 w-full container'].join(' ')
    const imageClass = [imagePosition === 'left' ? 'order-1' : '-order-1', 'relative'].join(' ')
    return (
        <section className={wrapperClass}>
            {image && (
                <div className={imageClass}>
                    <Image
                        src={image.url}
                        alt={image.alt || 'Section image'}
                        fill
                        className='object-cover object-center'
                    />
                </div>
            )}
            <div className='col-span-2 flex flex-col'>
                <h2 className='mb-4 text-center text-xl font-bold'>{title}</h2>
                <div className='prose' dangerouslySetInnerHTML={{ __html: content || '' }} />
            </div>
        </section>
    )
}

export default RichTextSection
