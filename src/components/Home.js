import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
    const particlesInit = async (main) => {
        console.log("Initializing particles...");
        await loadFull(main); // Ensures all tsparticles features are loaded
    };

    return (
        <div id="home" className="relative h-screen w-full bg-black text-white">
            {/* Particles: Lower z-index */}
            <Particles
                id="tsparticles"
                className="absolute top-0 left-0 h-full w-full z-0"
                init={particlesInit}
                options={{
                    fpsLimit: 60,
                    particles: {
                        number: { value: 150 },
                        color: { value: "#ffffff" },
                        size: { value: 3 },
                        move: {
                            enable: true,
                            speed: 1.5,
                            outModes: { default: "bounce" },
                        },
                        opacity: { value: 0.7 },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.5,
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            onClick: { enable: false },
                            resize: true,
                        },
                        modes: {
                            repulse: {
                                distance: 120,
                                duration: 0.8,
                            },
                        },
                    },
                    background: {
                        color: "#000000",
                    },
                }}
            />
            {/* Content: Higher z-index */}
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to Seth's World</h1>
                <button
                    className="mt-6 px-8 py-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
                    onClick={() => {
                        const workSection = document.getElementById("work");
                        if (workSection) {
                            workSection.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    Explore My Work
                </button>
            </div>
        </div>
    );
};

export default Home;
