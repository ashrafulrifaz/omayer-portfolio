"use client";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Footer from "../Footer/Footer";
import { K2D } from "next/font/google";
import { motion } from "framer-motion"

const k2d = K2D({ weight: ['400', '500', '700'], subsets: ["latin"] });

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_3w4i2hh', 
                'template_z45t5ii',
                form.current,
                '8UR4-wKi_ISr68PwN'
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className="contact">
            <div className="pt-5 lg:pt-10 pb-5 max-w-[92%] lg:max-w-[1200px] mx-auto text-center">
                <motion.h3 initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className={`text-2xl lg:text-3xl font-medium text-center ${k2d.className}`}>Contact with me</motion.h3>
                <motion.p initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className="text-base lg:text-xl font-medium text-center mt-1 lg:mt-3">Let{"'"}s connect and bring your ideas to life!</motion.p>
                <motion.form initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}} ref={form} onSubmit={sendEmail} className="mt-4 lg:mt-8 space-y-2.5 lg:space-y-6 w-full md:w-3/4 lg:w-1/2 mx-auto">
                    <input type="text" name="from_name" placeholder="Enter your name here" required/>
                    <input type="email" name="from_email" placeholder="Enter your email here" required className="w-full p-3 border rounded"/>
                    <input type="text" name="subject" placeholder="Enter your subject here" required/>
                    <textarea rows={4} name="message" placeholder="Enter your message here" required/>
                    <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 1, duration: 0.3}} type="submit" className={`text-base lg:text-xl font-bold lg:font-medium hover:scale-90 transition-all ${k2d.className}`}>
                        Send Message
                    </motion.button>
                </motion.form>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
