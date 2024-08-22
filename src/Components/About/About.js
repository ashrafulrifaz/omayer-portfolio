"use client"
import Image from "next/image";
import MyImg from '@/assets/about.json'
import Premiere from '@/assets/premiere-pro.png'
import Capcut from '@/assets/capcut.png'
import Photoshop from '@/assets/photoshop.png'
import Illustrator from '@/assets/illustrator.png'
import AfterEffect from '@/assets/after-effects.png'
import DaVinci from '@/assets/davinci.png'
import { K2D } from "next/font/google";
import Lottie from "lottie-react";
import { motion } from "framer-motion"

const k2d = K2D({weight: ['400', '500', '700'], subsets: ["latin"] });

const About = () => {
    return (
        <div className="py-6 lg:py-12 max-w-[92%] lg:max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <Lottie className="hidden lg:block" animationData={MyImg} />
                <div className="space-y-3">
                    <motion.h2 initial={{filter: 'blur(10px)'}} animate={{filter: 'blur(0px)'}} transition={{duration: 0.3, delay: 0.3}} className={`font-medium text-2xl lg:text-5xl leading-snug ${k2d.className}`}>Professional Video Editor</motion.h2>
                    <motion.p initial={{filter: 'blur(10px)'}} animate={{filter: 'blur(0px)'}} transition={{duration: 0.3, delay: 0.5}} className="text-base lg:text-xl font-medium text-gray-600 leading-normal">I am a skilled video editor specializing in crafting compelling short videos, documentary films, and a wide range of other video content. With a keen eye for detail and a passion for storytelling, I transform raw footage into engaging and polished final products. My expertise includes: Combining technical proficiency with creative vision, I strive to deliver high-quality videos that resonate with audiences and achieve desired outcomes. Let{"'"}s collaborate to bring your vision to the screen!</motion.p>
                    <motion.h3 initial={{filter: 'blur(10px)'}} animate={{filter: 'blur(0px)'}} transition={{duration: 0.3, delay: 0.7}} className={`text-xl lg:text-2xl font-medium ${k2d.className}`}>My Expertise</motion.h3>
                    <div>
                        <div className="mt-5 flex gap-3 lg:gap-6 items-center flex-wrap">
                            <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 0.9}} className="app_card">
                                <Image src={Premiere} alt="App Image" />
                                <span>Premiere Pro</span>
                            </motion.div>
                            <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 1}} className="app_card">
                                <Image src={Photoshop} alt="App Image" />
                                <span>Photoshop</span>
                            </motion.div>
                            <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 1.1}} className="app_card">
                                <Image src={Illustrator} alt="App Image" />
                                <span>Illustrator</span>
                            </motion.div>
                            <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 1.2}} className="app_card">
                                <Image src={AfterEffect} alt="App Image" />
                                <span>After Effect</span>
                            </motion.div>
                            <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 1.3}} className="app_card">
                                <Image src={DaVinci} alt="App Image" />
                                <span>daVinci</span>
                            </motion.div>
                            <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 1.4}} className="app_card">
                                <Image src={Capcut} alt="App Image" />
                                <span>Capcut</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;