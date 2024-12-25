import React from "react";
import { motion } from "framer-motion";

const Work = () => {
    return (
        <div
            id="work"
            className="relative z-10 min-h-screen bg-gray-100 text-gray-800 flex flex-col justify-center items-center"
        >
            <motion.h1
                className="text-5xl font-bold"
                initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
                whileInView={{ opacity: 1, y: 0 }} // Fade in and move into place
                viewport={{ once: true }} // Animate only once when in view
                transition={{ duration: 1 }} // Animation duration
            >
                Work
            </motion.h1>
            <motion.p
                className="text-lg mt-4 max-w-2xl text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Dive into my professional experiences, from cutting-edge technology at Lockheed Martin to directing creative projects.
            </motion.p>
        </div>
    );
};

export default Work;
