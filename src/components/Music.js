import React from "react";
import { motion } from "framer-motion";

const Music = () => {
    return (
        <div
            id="music"
            className="relative z-10 min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex flex-col justify-center items-center"
        >
            <motion.h1
                className="text-5xl font-bold"
                initial={{ opacity: 0, x: -100 }} // Start hidden and off-screen to the left
                whileInView={{ opacity: 1, x: 0 }} // Slide in and fade into place
                viewport={{ once: true }} // Animate only once when in view
                transition={{ duration: 1 }} // Animation duration
            >
                Music
            </motion.h1>
            <motion.p
                className="text-lg mt-4 max-w-2xl text-center"
                initial={{ opacity: 0, x: 100 }} // Start hidden and off-screen to the right
                whileInView={{ opacity: 1, x: 0 }} // Slide in and fade into place
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Explore my journey in music, from creating soulful melodies to building an online following of 1.5M.
            </motion.p>
        </div>
    );
};

export default Music;
