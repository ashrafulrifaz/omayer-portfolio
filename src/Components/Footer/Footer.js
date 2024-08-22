import Link from "next/link";
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <div className="border-2 border-gray-200 px-4 py-3 rounded-full w-full bg-white bg-opacity-40 !p-4 mt-6 md:mt-10 flex flex-col md:flex-row items-center justify-between gap-3">
            <motion.p initial={{filter: 'blur(40px)'}} animate={{filter: 'blur(0)'}} transition={{duration: 1.5}} className="font-medium text-base lg:text-lg">Copyright © Ehasanul Islam All Rights Reserved</motion.p>
            <motion.p initial={{filter: 'blur(40px)'}} animate={{filter: 'blur(0)'}} transition={{duration: 1.5}} className="font-medium text-base lg:text-lg">Developed by <Link className="font-bold underline" href="https://imashraful.netlify.app/" target="_blank">Ashraful</Link></motion.p>
        </div>
    );
};

export default Footer;