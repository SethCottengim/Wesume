import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-black text-white py-4 px-8 flex justify-between items-center z-50">
            <h1 className="text-2xl font-bold">Seth's Website</h1>
            <ul className="flex space-x-4">
                <li>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-blue-500 transition duration-300"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="work"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-blue-500 transition duration-300"
                    >
                        Work
                    </Link>
                </li>
                <li>
                    <Link
                        to="music"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-blue-500 transition duration-300"
                    >
                        Music
                    </Link>
                </li>
                <li>
                    <Link
                        to="creative-director"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-blue-500 transition duration-300"
                    >
                        Creative Director
                    </Link>
                </li>
                <li>
                    <Link
                        to="athletics"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-blue-500 transition duration-300"
                    >
                        Athletics
                    </Link>
                </li>
                <li>
                    <Link
                        to="specs"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-blue-500 transition duration-300"
                    >
                        Specs
                    </Link>
                </li>
                <li>
                    <Link
                        to="about-me"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-blue-500 transition duration-300"
                    >
                        About Me
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
