import Image from 'next/image'
import React from 'react'
import { StepperSectionProps } from './types'

const StepperSection: React.FC<StepperSectionProps> = ({ backgroundColor, steps, title }) => {
    return (
        <div style={{ background: backgroundColor?.hex }} className='w-full bg-slate-500'>
            <div className='container grid auto-cols-fr grid-flow-col items-center justify-items-center py-4'>
                {steps.map((step) => (
                    <div
                        key={step.id}
                        style={{ borderColor: `#00000020` }}
                        className='flex h-full w-full flex-col items-center justify-start border-r px-4 last-of-type:border-r-0'
                    >
                        <Image src={step.icon?.url || ''} alt={step.icon?.alt || ''} width={128} height={128} />
                        <h5 className='mb-2 text-center text-xl font-semibold'>{step.name}</h5>
                        <p className='text-center text-lg'>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StepperSection
