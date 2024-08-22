"use client"
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import HiIcon from '@/assets/wave.png'
import MyImg from '@/assets/banner-image.png'
import videoImg from '@/assets/video.png'
import developImg from '@/assets/development.png'
import AfterEffectsImg from '@/assets/after-effects.png'
import PremiereProImg from '@/assets/premiere-pro.png'
import Social from "./Social";
import { K2D } from "next/font/google";
import { motion } from "framer-motion"

const k2d = K2D({weight: ['500', '700'], subsets: ["latin"] });

const Banner = () => {
    return (
        <div className="pt-5 banner">
            <div className="max-w-[92%] lg:max-w-[1200px] mx-auto">
                <Navbar />
                <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 1}} className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center h-full">
                    <div className="space-y-3 lg:space-y-5 py-7 lg:py-0">
                        <div className="flex justify-center md:justify-start items-center gap-3">
                            <span className={`text-lg lg:text-xl font-medium ${k2d.className}`}>HI</span>
                            <Image src={HiIcon} alt="hi" className="hi_icon w-6 h-6" />
                        </div>
                        <h2 className={`font-medium text-3xl lg:text-6xl leading-tight lg:leading-snug text-center md:text-left ${k2d.className}`}>I am Ehasanul Islam, <br /> A Proffessional Video Editor</h2>
                        <p className="text-center md:text-left text-base lg:text-xl font-medium">I’m a video editor with 1 year of experience and I work remotely from Bangladesh.</p>
                        <div className="text-center md:text-left">
                            <Social />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute w-full h-full -bottom-[40%] -right-[5%] p-4 rounded-full border-[3px] border-[#d117b6] z-0">
                            <div className="bg-[#d117b6] w-full h-full rounded-full"></div>
                        </div>
                        <div className="relative z-10">
                            <Image src={MyImg} alt="omayer" />
                        </div>
                        <Image src={videoImg} alt="omayer" className="banner_icons top-[6%] right-[10%] rotate-[25deg] " />
                        <Image src={PremiereProImg} alt="omayer" className="banner_icons top-[44%] right-[10%] -rotate-12 " />
                        <Image src={AfterEffectsImg} alt="omayer" className="banner_icons top-[10%] left-[15%] -rotate-[30deg] " />
                        <Image src={developImg} alt="omayer" className="banner_icons top-[44%] left-[10%] -rotate-12 " />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;