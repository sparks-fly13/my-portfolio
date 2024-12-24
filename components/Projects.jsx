import { PinContainer } from './ui/3dPin'
import { projects } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import bgImg from "@/public/assets/bg.png";
 
const Projects = () => {
  return (
    <div className='py-20'>
      <h1 className='heading mb-20'>
        Find some of {' '}<span className='text-blue-200'>my</span>{' '}<span className='text-purple'>projects</span>{' '}here
      </h1>
      <div className='flex flex-wrap justify-center items-center p-4 gap-x-24 gap-y-40' id="projects">
        {projects.map(({ id, title, des, img, iconLists, link, linkGithub, htmlId }) => (
          <div key={id} className='h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]' id={htmlId}>
            <PinContainer title={title} href={link} github={linkGithub}>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
              <p className='lg:text-sm lg:font-normal font-light text-sm line-clamp-3'>{des}</p>
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] overflow-hidden my-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <Image src={bgImg} alt="bg-img" height={0} width={0} className='h-full w-full' />
                </div>
                <Image src={img} alt={title} className='z-10 absolute bottom-0 h-full w-full' height={0} width={0}/>
              </div>
              <div className='flex items-center'>
                {iconLists.map((icon, i) => (
                  <div key={i} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center' style={{
                    transform: `translateX(-${5*i*2}px)`
                  }}>
                    <Image src={icon} alt={icon} height={0} width={0} className='w-full h-full p-2' />
                  </div>
                ))}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects