import Link from "next/link";
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <div className="footer !p-4 mt-10 flex items-center justify-between">
            <motion.p initial={{filter: 'blur(40px)'}} animate={{filter: 'blur(0)'}} transition={{duration: 1.5}} className="font-medium text-lg">Copyright © Ehasanul Islam All Rights Reserved</motion.p>
            <motion.p initial={{filter: 'blur(40px)'}} animate={{filter: 'blur(0)'}} transition={{duration: 1.5}} className="font-medium text-lg">Developed by <Link className="font-bold underline" href="https://imashraful.netlify.app/" target="_blank">Ashraful</Link></motion.p>
        </div>
    );
};

export default Footer;