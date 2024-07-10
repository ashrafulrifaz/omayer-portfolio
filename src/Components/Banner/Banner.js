import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import HiIcon from '@/assets/wave.png'

const Banner = () => {
    return (
        <div className="py-5 banner">
            <div className="max-w-[1200px] mx-auto">
                <Navbar />
                <div className="grid grid-cols-2 gap-5 items-center h-full">
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-medium">HI</span>
                            <Image src={HiIcon} alt="hi" className="w-6 h-6" />
                        </div>
                        <h2 className="font-semibold text-6xl leading-snug">I’m Ehasanul Islam, <br /> A Proffessional Video Editor</h2>
                        <p className="text-lg ">I’m a Video editor with 1 year of experience and I work remotely from Bangladesh.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;