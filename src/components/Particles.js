import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Particles = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create particles
        const particleCount = 500;
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 2,
        });

        // Generate random particle positions
        const positions = [];
        for (let i = 0; i < particleCount; i++) {
            positions.push((Math.random() - 0.5) * 10); // x
            positions.push((Math.random() - 0.5) * 10); // y
            positions.push((Math.random() - 0.5) * 10); // z
        }
        particlesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        camera.position.z = 5;

        const clock = new THREE.Clock();

        // Mouse interaction
        const mouse = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();

        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", onMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);

            // Make particles stationary until hovered over
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(particles);

            if (intersects.length > 0) {
                const particlePositions = particlesGeometry.attributes.position.array;
                for (let i = 0; i < particleCount * 3; i += 3) {
                    particlePositions[i] += (Math.random() - 0.5) * 0.1; // x
                    particlePositions[i + 1] += (Math.random() - 0.5) * 0.1; // y
                    particlePositions[i + 2] += (Math.random() - 0.5) * 0.1; // z
                }
                particlesGeometry.attributes.position.needsUpdate = true;
            }

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default Particles;
