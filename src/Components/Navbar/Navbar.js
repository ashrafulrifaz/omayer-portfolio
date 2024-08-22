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
        <div className={`header ${!showMenu ? 'border-2 bg-opacity-40' : '!bg-opacity-60 !border-b-none !rounded-b-none !rounded-t-3xl'}`}>
            <motion.h1 animate={{ x: 0 }} initial={{x: -500}} className={`${k2d.className} font-semibold lg:font-medium text-xl lg:text-4xl`}>Ehasanul Islam</motion.h1>
            <div>
                <div className="lg:hidden">
                    <div className="action_btn z-20" onClick={() => setShowMenu(!showMenu)}>
                        <Image src={BarIcon} className={`${!showMenu ? 'block' : 'hidden'}`} alt="bar" />
                        <Image src={CrossIcon} className={`${!showMenu ? 'hidden' : 'block'}`} alt="cross" />
                    </div>
                    <div className={`ham_container ${!showMenu ? '!-top-80' : '!top-[52px]'}`}>
                        <ul className="grid gap-2 px-4">
                            <motion.a initial={{scale: 0}} animate={{scale: 1}} href="#about">About</motion.a>
                            <motion.a initial={{scale: 0}} animate={{scale: 1}} href="#projects">Projects</motion.a>
                            <motion.a initial={{scale: 0}} animate={{scale: 1}} href="#contact">Contact</motion.a>
                            <motion.button initial={{scale: 0}} animate={{scale: 1}} class={`book-call text-base md:text-lg hover:scale-90 transition-all ${k2d.className}`}>Let{"'"}<span className="lowercase">s</span> Chat</motion.button>
                        </ul>
                    </div>
                </div>
                <div class="nav-items">
                    <motion.a initial={{scale: 0}} animate={{scale: 1}} href="#about">About</motion.a>
                    <motion.a initial={{scale: 0}} animate={{scale: 1}} href="#projects">Projects</motion.a>
                    <motion.a initial={{scale: 0}} animate={{scale: 1}} href="#contact">Contact</motion.a>
                    <motion.button initial={{scale: 0}} animate={{scale: 1}} class={`book-call text-lg hover:scale-90 transition-all ${k2d.className}`}>Let{"'"}<span className="lowercase">s</span> Chat</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;