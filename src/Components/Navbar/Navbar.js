"use client"
import { K2D } from "next/font/google";
import { motion } from "framer-motion"

const k2d = K2D({weight: ['400', '500', '700'], subsets: ["latin"] });

const Navbar = () => {
    return (
        <div className={`header flex justify-between items-center overflow-hidden`}>
            <motion.h1 animate={{ x: 0 }} initial={{x: -500}} className={`${k2d.className} font-medium text-4xl`}>Ehasanul Islam</motion.h1>
            <div>
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