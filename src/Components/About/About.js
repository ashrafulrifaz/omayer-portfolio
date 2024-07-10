import Image from "next/image";
import MyImg from '@/assets/me.jpg'
import Premiere from '@/assets/premiere-pro.png'
import Capcut from '@/assets/capcut.png'
import Photoshop from '@/assets/photoshop.png'
import Illustrator from '@/assets/illustrator.png'
import AfterEffect from '@/assets/after-effects.png'
import DaVinci from '@/assets/davinci.png'

const About = () => {
    return (
        <div className="py-10 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 gap-5 items-center">
                <Image src={MyImg} alt="My image" className="rounded-[50px] border-[3px] border-main" />
                <div className="space-y-3">
                    <h2 className="font-semibold text-5xl leading-snug">Professional Video Editor</h2>
                    <p className="text-lg font-medium">I am a skilled video editor specializing in crafting compelling short videos, documentary films, and a wide range of other video content. With a keen eye for detail and a passion for storytelling, I transform raw footage into engaging and polished final products. My expertise includes: Combining technical proficiency with creative vision, I strive to deliver high-quality videos that resonate with audiences and achieve desired outcomes. Let{"'"}s collaborate to bring your vision to the screen!</p>
                    <h3 className="text-2xl font-semibold">My Expertise</h3>
                    <div className="flex gap-4 items-center flex-wrap">
                        <div className="app_card">
                            <Image src={Premiere} alt="App Image" />
                            <span>Premiere Pro</span>
                        </div>
                        <div className="app_card">
                            <Image src={Photoshop} alt="App Image" />
                            <span>Photoshop</span>
                        </div>
                        <div className="app_card">
                            <Image src={Illustrator} alt="App Image" />
                            <span>Illustrator</span>
                        </div>
                        <div className="app_card">
                            <Image src={AfterEffect} alt="App Image" />
                            <span>After Effect</span>
                        </div>
                        <div className="app_card">
                            <Image src={DaVinci} alt="App Image" />
                            <span>daVinci</span>
                        </div>
                        <div className="app_card">
                            <Image src={Capcut} alt="App Image" />
                            <span>Capcut</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;