import React from "react";
import { motion } from "framer-motion";

const CreativeDirector = () => {
    return (
        <div
            id="creative-director"
            className="relative z-10 min-h-screen bg-gradient-to-r from-green-500 to-blue-500 text-white flex flex-col justify-center items-center"
        >
            <motion.h1
                className="text-5xl font-bold"
                initial={{ opacity: 0, y: -50 }} // Start hidden and slightly above
                whileInView={{ opacity: 1, y: 0 }} // Fade in and move into place
                viewport={{ once: true }} // Animate only once when in view
                transition={{ duration: 1 }} // Animation duration
            >
                Creative Director
            </motion.h1>
            <motion.p
                className="text-lg mt-4 max-w-2xl text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Leading creative projects for top-tier brands and building stories that resonate.
            </motion.p>
        </div>
    );
};

export default CreativeDirector;
