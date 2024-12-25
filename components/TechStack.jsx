import React from 'react'
import { InfiniteMovingCards } from './ui/MovingCards'
import { techStack } from '@/data/data'

const TechStack = () => {
    return (
        <div className='pt-20 -mb-36'>
            <h1 className='heading mb-20'>
            <span className='text-purple'>Languages</span> and <span className='text-blue-200'>Tech Stack</span> I have experience with
            </h1>
            <div className='flex flex-col items-center' id="tech-stack">
                <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
                    <InfiniteMovingCards
                        items={techStack}
                        direction='right'
                        speed='normal'
                        pauseOnHover={true}
                    />
                 </div>
            </div>
        </div>
    )
}

export default TechStack