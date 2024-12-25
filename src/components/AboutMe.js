import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <div
            id="about-me"
            className="relative z-10 min-h-screen bg-gradient-to-r from-pink-500 to-red-500 text-white flex flex-col justify-center items-center"
        >
            <motion.h1
                className="text-5xl font-bold"
                initial={{ opacity: 0, y: 100 }} // Start hidden and off-screen below
                whileInView={{ opacity: 1, y: 0 }} // Slide up and fade into place
                viewport={{ once: true }} // Animate only once when in view
                transition={{ duration: 1 }} // Animation duration
            >
                About Me
            </motion.h1>
            <motion.p
                className="text-lg mt-4 max-w-2xl text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Learn more about my personal journey, values, and what drives me to create and inspire.
            </motion.p>
        </div>
    );
};

export default AboutMe;
