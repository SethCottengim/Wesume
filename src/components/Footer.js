import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <motion.footer
            className="relative z-10 bg-blue-600 text-white py-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <p>&copy; 2024 Seth Cottengim. All rights reserved.</p>
            <div className="flex justify-center mt-2 space-x-4">
                <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 transition"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="https://github.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 transition"
                >
                    <FaGithub size={24} />
                </a>
                <a
                    href="https://youtube.com/yourchannel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 transition"
                >
                    <FaYoutube size={24} />
                </a>
                <a
                    href="https://instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 transition"
                >
                    <FaInstagram size={24} />
                </a>
            </div>
        </motion.footer>
    );
};

export default Footer;
