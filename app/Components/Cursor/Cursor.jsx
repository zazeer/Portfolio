import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
    const $follower = useRef(null); // Create a ref for the cursor element

    useEffect(() => {
        const follower = $follower.current; // Access the DOM element through the ref

        // GSAP for smooth cursor movement
        const xTo = gsap.quickTo(follower, "x", {
            duration: 0.6,
            ease: "power3",
        });

        const yTo = gsap.quickTo(follower, "y", {
            duration: 0.6,
            ease: "power3",
        });

        // Move the custom cursor with the mouse
        const handleMouseMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        // Add mousemove listener
        window.addEventListener("mousemove", handleMouseMove);

        // Hide the cursor on hover over interactive elements
        const hideCursor = () => {
            follower.style.opacity = 0; // Hide custom cursor
        };

        const showCursor = () => {
            follower.style.opacity = 1; // Show custom cursor
        };

        // Add event listeners to elements you want to hide the cursor on hover
        const hoverElements = document.querySelectorAll("a, button, input"); // Add more selectors if needed
        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", hideCursor);
            el.addEventListener("mouseleave", showCursor);
        });

        // Cleanup event listeners
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            hoverElements.forEach((el) => {
                el.removeEventListener("mouseenter", hideCursor);
                el.removeEventListener("mouseleave", showCursor);
            });
        };
    }, []);

    return (
        <div
            ref={$follower} // Bind the ref to the div
            className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-50"
            style={{
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle,  #b182e3 0%, rgba(255, 255, 255, 0) 70%)",
                transition: "opacity 0.3s ease", // Smooth hide/show effect
            }}
        />
    );
};

export default CustomCursor;
