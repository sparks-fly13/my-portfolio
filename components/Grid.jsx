"use client";
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridData } from '@/data/data'
import { CardSpotlight } from './ui/CardSpotlight';

const Grid = () => {
  const handleMouseEnter= () => {
    document.getElementById('bento').classList.remove('lg:opacity-0');
    document.getElementById('bento').classList.add('lg:duration-200');
  }
  const handleMouseLeave = () => {
    document.getElementById('bento').classList.add('lg:opacity-0');
  }
  return (
    <section id="about">
      <CardSpotlight>
        <BentoGrid handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}>
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
        </CardSpotlight>
    </section>
  )
}

export default Grid