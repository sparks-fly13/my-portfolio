"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavComponents";
import { cn } from "@/lib/utils";
import DevsDungeon from "../public/assets/DevsDungeon.jpeg";
import Youtech from "../public/assets/youtech.jpeg";
import CropStop from "../public/assets/Cropstop.jpeg";
import UnityThreads from "../public/assets/UnityThreads.jpeg";

export function TopNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#portfolio" className="relative">
              Hi! it's me
            </HoveredLink>
            <HoveredLink href="#tech-stack" className="relative">
              Tech Stack
            </HoveredLink>
            <HoveredLink href="#Education" className="relative">
              My Education
            </HoveredLink>
            <HoveredLink href="#Contact" className="relative">
              Contact Me
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="My Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="DevsDungeon"
              href="https://devs-dungeon.vercel.app/"
              src={DevsDungeon}
              description="A community-based forum for developers integrated with AI."
              className="relative"
            />
            <ProductItem
              title="CropStop"
              href="https://cropstopapp.netlify.app/"
              src={CropStop}
              description="A one-stop solution for all your agricultural needs."
              className="relative"
            />
            <ProductItem
              title="Youtech"
              href="https://github.com/sparks-fly13/youtech.git"
              src={Youtech}
              description="Platform to ease uploads for youtubers and their editors."
              className="relative"
            />
            <ProductItem
              title="UnityThreads"
              href="https://wallmart-livid.vercel.app/"
              src={UnityThreads}
              description="An E-commerce platform for all your clothing needs."
              className="relative"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resume">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/resume-photo" className="relative">
              Photo Resume
            </HoveredLink>
            <HoveredLink href="/resume-text" className="relative">
              Text Resume
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
