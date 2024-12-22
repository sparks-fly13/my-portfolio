"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children
}) => {
    return (
        (<div onMouseEnter={() => setActive(item)} className="relative ">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-black/[.4] scale-90 hover:opacity-50 hover:scale-110 hover:duration-300 dark:text-white">
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}>
                    {active === item && (
                        <div
                            className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                // layoutId ensures smooth animation
                                layoutId="active"
                                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
                                <motion.div
                                    // layout ensures smooth animation
                                    layout
                                    className="w-max h-full p-4">
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>)
    );
};

export const Menu = ({
    setActive,
    children
}) => {
    return (
        (<nav
            // resets the state
            onMouseLeave={() => setActive(null)}
            className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 ">
            {children}
        </nav>)
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src
}) => {
    return (
        (<Link href={href} target="_blank" className="flex space-x-2">
            <Image
                src={src}
                width={120}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-3xl shadow-2xl hover:opacity-75 hover:-translate-y-4 hover:duration-500 hover:ease-out" />
            <div>
                <h4 className="text-xl font-bold mb-1 text-black dark:text-white relative group">
                    {title}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                </h4>
                <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300 hover:dark:opacity-80 hover:translate-x-2 hover:translate-y-1 hover:duration-500">
                    {description}
                </p>
            </div>
        </Link>)
    );
};

export const HoveredLink = ({
    children,
    ...rest
}) => {
    return (
        (<Link
            {...rest}
            className="text-neutral-700 dark:text-neutral-200 hover:text-black hover:translate-x-2 hover:duration-200 hover:ease-out">
            {children}
        </Link>)
    );
};
