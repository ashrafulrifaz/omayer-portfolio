"use client"
import { useState } from "react";
import { motion } from "framer-motion"

const tabs = [
    {name: 'videos'},
    {name: 'shorts'},
    {name: 'documentary'},
    {name: 'story'},
    {name: 'animations'}
]

const videos = [
    {
        cat: 'shorts',
        link: 'https://drive.google.com/file/d/1LjuFPNblPbaGGxRf7hiI9K2ZSiD_CSs-/preview'
    },
]

const Work = () => {
    const [currentTab, setCurrentTab] = useState('videos')

    return (
        <div className="py-10 max-w-[1200px] mx-auto">
            <h3 className="text-2xl font-semibold text-center">Some Masterpieces</h3>
            <div className="flex items-center justify-center gap-4 mt-9">
                {
                    tabs.map((tab, idx) => (
                        <button key={idx} className={`p-1.5 px-4 bg-main ${tab?.name === currentTab ? 'bg-opacity-100' : 'bg-opacity-5'} border-[1.5px] border-main border-opacity-40 rounded-xl transition-colors duration-500`} onClick={() => setCurrentTab(tab?.name)}>{tab?.name}</button>
                    ))
                }
            </div>
            <div className={`${currentTab === 'shorts' ? 'flex ' : 'grid grid-cols-3'} gap-6 mt-10`}>
                {
                    videos.map((video, idx) => (
                        currentTab === video?.cat ?
                        <motion.div initial={{filter: 'blur(4px)'}} animate={{filter: 'blur(0)'}} transition={{duration: 5}} key={idx}>
                            <iframe src={video?.link} frameborder="0" className="w-auto"></iframe>
                        </motion.div>
                        : ''
                    ))
                }
            </div>
        </div>
    );
};

export default Work;