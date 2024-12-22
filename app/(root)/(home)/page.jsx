import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import { TopNavbar } from '@/components/Navbar'
import Projects from '@/components/Projects'
import React from 'react'

const Home = () => {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5' id="portfolio">
        <div className='max-w-7xl w-full'>
            <TopNavbar />
            <Hero />
            <Grid />
            <Projects />
        </div>
    </main>
  )
}

export default Home