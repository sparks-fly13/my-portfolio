import dynamic from 'next/dynamic'
const Grid = dynamic(() => import('@/components/Grid'), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
// import Grid from '@/components/Grid'
// import Hero from '@/components/Hero'
import { TopNavbar } from '@/components/Navbar'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import React from 'react'
import ContactMe from '@/components/ContactMe'

const Home = () => {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5' id="portfolio">
        <div className='max-w-7xl w-full'>
            <TopNavbar />
            <Hero />
            <h2 className='text-3xl text-center -mt-12 text-pretty mb-4 text-[#e2e2e2] max-lg:hidden' id="education">Bring your cursor over here to discover more!</h2>
            <Grid />
            <Projects />
            <TechStack />
            <ContactMe />
        </div>
    </main>
  )
}

export default Home