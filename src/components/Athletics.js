import React from "react";
import { motion } from "framer-motion";

const Athletics = () => {
    return (
        <div
            id="athletics"
            className="relative z-10 min-h-screen bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex flex-col justify-center items-center"
        >
            <motion.h1
                className="text-5xl font-bold"
                initial={{ opacity: 0, scale: 0.8 }} // Start smaller and faded
                whileInView={{ opacity: 1, scale: 1 }} // Scale up and fade in
                viewport={{ once: true }} // Animate only once when in view
                transition={{ duration: 1 }} // Animation duration
            >
                Athletics
            </motion.h1>
            <motion.p
                className="text-lg mt-4 max-w-2xl text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                A journey through discipline, teamwork, and resilience as a professional athlete.
            </motion.p>
        </div>
    );
};

export default Athletics;
