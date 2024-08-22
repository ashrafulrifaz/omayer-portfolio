"use client"
import '../../app/globals.css'
import { K2D } from "next/font/google";
import { motion } from "framer-motion"
import BarIcon from '@/assets/bar.png'
import CrossIcon from '@/assets/cross.png'
import Image from "next/image";
import { useState } from "react";
const k2d = K2D({weight: ['400', '500', '700'], subsets: ["latin"] });

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className={`border-2 border-gray-200 px-4 py-3 rounded-full w-full bg-white flex justify-between items-center lg:overflow-hidden relative ${!showMenu ? 'border-2 bg-opacity-40' : '!bg-opacity-80 !border-b-none !rounded-b-none !rounded-t-3xl'}`}>
            <motion.h1 animate={{ x: 0 }} initial={{x: -500}} className={`${k2d.className} font-semibold lg:font-medium text-xl lg:text-4xl`}>Ehasanul Islam</motion.h1>
            <div>
                <div className="lg:hidden">
                    <div className="action_btn z-20" onClick={() => setShowMenu(!showMenu)}>
                        <Image src={BarIcon} className={`${!showMenu ? 'block' : 'hidden'} w-5 h-5`} alt="bar" />
                        <Image src={CrossIcon} className={`${!showMenu ? 'hidden' : 'block'} w-5 h-5`} alt="cross" />
                    </div>
                    <div className={`absolute left-0 top-16 w-full border-2 z-10 transition-all duration-500 bg-white bg-opacity-80 py-2 rounded-b-3xl ${!showMenu ? '!-top-80' : '!top-[52px]'}`}>
                        <ul className="grid gap-2 px-4">
                            <motion.a className='font-semibold' initial={{scale: 0}} animate={{scale: 1}} href="#about">About</motion.a>
                            <motion.a className='font-semibold' initial={{scale: 0}} animate={{scale: 1}} href="#projects">Projects</motion.a>
                            <motion.a className='font-semibold' initial={{scale: 0}} animate={{scale: 1}} href="#contact">Contact</motion.a>
                            <motion.button className='font-semibold' initial={{scale: 0}} animate={{scale: 1}} class={`py-2 px-6 rounded-full text-black bg-main font-medium capitalize hover:bg-main text-base hover:scale-90 transition-all ${k2d.className}`}>Let{"'"}<span className="lowercase">s</span> Chat</motion.button>
                        </ul>
                    </div>
                </div>
                <div class="gap-5 items-center hidden lg:flex">
                    <motion.a className='font-semibold text-lg hover:text-main transition-colors' initial={{scale: 0}} animate={{scale: 1}} href="#about">About</motion.a>
                    <motion.a className='font-semibold text-lg hover:text-main transition-colors' initial={{scale: 0}} animate={{scale: 1}} href="#projects">Projects</motion.a>
                    <motion.a className='font-semibold text-lg hover:text-main transition-colors' initial={{scale: 0}} animate={{scale: 1}} href="#contact">Contact</motion.a>
                    <motion.button initial={{scale: 0}} animate={{scale: 1}} class={`py-2 lg:py-2.5 px-6 rounded-full text-black bg-main font-medium capitalize hover:bg-main text-lg hover:scale-90 transition-all ${k2d.className}`}>Let{"'"}<span className="lowercase">s</span> Chat</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;