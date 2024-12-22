"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./BgAnimation";
import { GlobeDemo } from "./GlobeFunc";
import { techStack } from "@/data/data";
import Lottie from "react-lottie";
import animationData from "@/data/yayy.json";
import { useState } from "react";
import BorderMagicBtn from "./BorderMagicBtn";
import {IoCopyOutline} from 'react-icons/io5';

export const BentoGrid = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                "grid md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}>
            {children}
        </div>)
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
    id
}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('pulkitsinhaor@gmail.com');
        setCopied(true);
    }
    return (
        <div
            className={cn(
                "row-span-1 rounded-3xl overflow-hidden relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <Image src={img} alt={img} className={cn(imgClassName, 'object-cover, object-center')} width={100} height={100} />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'} `}>
                    {spareImg && (
                        <Image src={spareImg} alt={spareImg} className='object-cover object-center w-full h-full' width={100} height={100} />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation />
                )}
                <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>
                    {id === 2 && <GlobeDemo />}
                    {id === 3 && (
                        <div className="grid grid-cols-2 gap-1 lg:gap-2 w-fit absolute -right-3 lg:-right-2">
                                {techStack.map((tech) => (
                                    <span key={tech.id} className="py-1 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
                                        {tech.name}
                                    </span>
                                ))}
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }} />
                            </div>
                            <BorderMagicBtn title={copied ? "Email's copied!" : "Copy my email"} icon={<IoCopyOutline />} otherClasses="!bg-[#161a31]" handleClick={handleCopy} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
