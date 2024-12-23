import React from 'react'
import {CgProfile} from "react-icons/cg";
import { Spotlight } from './ui/Spotlight'
import { AuroraBackground } from './ui/AuroraBackground'
import { TextGenerateEffect } from './ui/text-generate-effect'
import BorderMagicBtn from './ui/BorderMagicBtn'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className="-top-40  -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10  left-full h-[80vh] w-[50vw]" fill="blue" />
                <Spotlight className="top-28  left-80 h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28  right-80 h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-72  right-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            <AuroraBackground>
                <div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileinview={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                            Hi! Welcome fellow developers (and non-developers :p).
                        </h2>
                        <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Scroll down to view different sections of my Portfolio." />
                        <p className='text-center text-blue-100 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                            I'm <strong><u>Pulkit Sinha</u></strong>, a Full Stack Developer!
                        </p>
                        <a href='#'><BorderMagicBtn title="About Me" position="left" icon={<CgProfile />} otherClasses="justify-center" /></a>
                    </div>
                </div>
            </AuroraBackground>
        </div>
    )
}

export default Hero