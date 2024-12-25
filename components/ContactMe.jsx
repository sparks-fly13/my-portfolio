import Image from 'next/image'
import React from 'react'
import BorderMagicBtn from './ui/BorderMagicBtn'
import {FaLocationArrow} from 'react-icons/fa'
import { socialMedia } from '@/data/data'
import Link from 'next/link'

const ContactMe = () => {
  return (
    <footer className='w-full pb-3' id="contact">
        <div className='w-full absolute left-0 -bottom-[3rem] min-h-96'>
            <Image src="/assets/footer-grid.svg" alt='grid' className='w-full h-full opacity-70' height={0} width={0} />
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                <span className='text-purple'>Connect</span> with me.
            </h1>
            <p className='text-center max-md:mb-5'>Let's <span className='text-purple'>build</span> <span className='text-blue-200'>something</span> together!</p>
            <a href='mailto:pulkitsinhaor@gmail.com'>
                <BorderMagicBtn title="Mail me here!" icon={<FaLocationArrow/>} position="right"/>
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Pulkit Sinha</p>
            <div className='flex items-center md:gap-3 gap-6 max-md:mt-4'>
                {socialMedia.map((app) => (
                    <Link href={app.link} target='_blank' key={app.id} className='w-10 h-10 cursor-pointer flex items-center justify-center rounded-full border border-black-300 backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200'>
                        <Image src={app.img} alt={app.name} height={20} width={20}/>
                    </Link>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default ContactMe