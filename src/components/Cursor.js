import React, { useEffect, useState } from "react";

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [velocity, setVelocity] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false); // Track hover state

    const easingFactorFar = 0.08; // Easing factor for larger distances
    const easingFactorClose = 0.07; // Easing factor for closer distances
    const threshold = 50; // Distance threshold to switch easing behavior

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const handleMouseEnter = () => setIsHovering(true); // Hover starts
        const handleMouseLeave = () => setIsHovering(false); // Hover ends

        const clickableItems = document.querySelectorAll("a, button, [data-hoverable]");

        clickableItems.forEach((item) => {
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            clickableItems.forEach((item) => {
                item.removeEventListener("mouseenter", handleMouseEnter);
                item.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    useEffect(() => {
        let animationFrame;

        const animateCursor = () => {
            const dx = mousePosition.x - cursorPosition.x;
            const dy = mousePosition.y - cursorPosition.y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            // Choose easing factor based on distance
            const easingFactor = distance < threshold ? easingFactorClose : easingFactorFar;

            const velocityX = dx * easingFactor;
            const velocityY = dy * easingFactor;

            setVelocity({ x: velocityX, y: velocityY });

            // Update cursor position
            setCursorPosition((prev) => ({
                x: prev.x + velocityX,
                y: prev.y + velocityY,
            }));

            animationFrame = requestAnimationFrame(animateCursor);
        };

        animationFrame = requestAnimationFrame(animateCursor);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [mousePosition, cursorPosition]);

    return (
        <div
            className="custom-cursor"
            style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
                width: isHovering ? `0px` : `30px`, // Shrink to 0px on hover
                height: isHovering ? `0px` : `30px`,
                zIndex: 51,
                backgroundColor: "rgb(255, 127, 0)", // Circle color
                borderRadius: "50%",
                boxShadow: `${-velocity.x * 2}px ${-velocity.y * 2}px 10px rgba(255, 127, 0, 0.5)`, // Motion blur
                transition: "width 0.3s ease, height 0.3s ease", // Smooth shrinking and growing
            }}
        ></div>
    );
};

export default Cursor;
