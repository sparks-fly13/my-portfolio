"use client";
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridData } from '@/data/data'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridData.map((item, i) => (
                <BentoGridItem
                    key={i}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                    img={item.img}
                    imgClassName={item.imgClassName}
                    titleClassName={item.titleClassName}
                    spareImg={item.spareImg}
                />
            ))
            }
        </BentoGrid>
    </section>
  )
}

export default Grid