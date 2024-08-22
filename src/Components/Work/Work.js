"use client"
import { useRef, useState } from "react";
import { K2D } from "next/font/google";
const k2d = K2D({weight: ['400', '500', '700'], subsets: ["latin"] });
import { motion } from "framer-motion"

const tabs = [
    {name: 'shorts'},
    {name: 'documentary'},
    {name: 'motion graphics'}
]

const videos = [
    {
        cat: 'shorts',
        link: 'https://youtube.com/embed/hKkHO8gkMqQ?showinfo=0'
    },
    {
        cat: 'shorts',
        link: 'https://youtube.com/embed/QTrYtpyvl1c'
    },
    {
        cat: 'shorts',
        link: 'https://youtube.com/embed/SwgqLOFjSYQ?si=JnOscqOEUXpUToWo'
    },
    {
        cat: 'shorts',
        link: 'https://youtube.com/embed/1BqRGecJHQE?si=YaP0gqpgBH9E7_Ve'
    },
    {
        cat: 'shorts',
        link: 'https://youtube.com/embed/hU4iNiEjkic?si=PQX4z3KdKuJn83hY'
    },
    {
        cat: 'documentary',
        link: 'https://www.youtube.com/embed/na0U9sYen14?si=4Td7qfcaKHuIxErL'
    },
    {
        cat: 'documentary',
        link: 'https://www.youtube.com/embed/_N0Ti1Jn-00?si=3oOemPlWlRIc0NSaki'
    },
    {
        cat: 'motion graphics',
        link: 'https://www.youtube.com/embed/7rwTUNEkk5c?si=4Np-xw6c3ioBaBZB;showinfo=0'
    },
]

const Work = () => {
    const [currentTab, setCurrentTab] = useState('shorts')

    return (
        <div className="py-4 lg:py-10 max-w-[92%] md:max-w-[1200px] mx-auto">
            <motion.h3 initial={{width: 0, opacity: 0}} animate={{width: '100%', opacity: 1}} transition={{duration: 0.5}} className={`text-2xl lg:text-3xl font-medium text-center ${k2d.className}`}>Some Masterpieces</motion.h3>
            <motion.p initial={{width: 0, opacity: 0}} animate={{width: '100%', opacity: 1}} transition={{duration: 0.5}}className="text-base lg:text-xl font-medium text-center mt-1 lg:mt-3">Explore some of my creative works</motion.p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-5 lg:mt-9">
                {
                    tabs.map((tab, idx) => (
                        <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 1,}} key={idx} className={`p-1 lg:p-1.5 px-2 lg:px-4 bg-main font-semibold text-base lg:text-lg ${tab?.name === currentTab ? 'bg-opacity-100' : 'bg-opacity-5'} border-2 border-main border-opacity-40 rounded-xl transition-colors duration-500`} onClick={() => setCurrentTab(tab?.name)}>{tab?.name}</motion.button>
                    ))
                }
            </div>
            <div className={`${currentTab === 'shorts' ? 'flex flex-wrap justify-center' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-3 md:gap-6 mt-6 lg:mt-10`}>
                {
                    currentTab === 'shorts' ?
                    videos.map((video, idx) => (
                        currentTab === video?.cat ?
                            <motion.iframe initial={{filter: 'blur(20px)'}} animate={{filter: 'blur(0)'}} transition={{duration: 1.5, delay: 1.3,}} key={idx} className="shorts" src={video?.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen controls={0} showinfo={0}></motion.iframe>
                            : ''
                    ))
                    :
                    videos.map((video, idx) => (
                        currentTab === video?.cat ?
                            <motion.iframe initial={{filter: 'blur(20px)'}} animate={{filter: 'blur(0)'}} transition={{duration: 1.5, delay: 1.3,}} key={idx} className="videos" src={video?.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>
                            : ''
                    ))
                }
            </div>
            
        </div>
    );
};

export default Work;