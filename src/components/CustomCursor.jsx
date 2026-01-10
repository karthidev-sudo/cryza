import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    
    // Smooth mouse physics
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);
    
    const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        
        // Check for hoverable elements
        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.hover-trigger')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleMouseOver);
        
        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            style={{
                translateX: cursorX,
                translateY: cursorY,
                position: 'fixed',
                top: -10, // Center offset (size/2)
                left: -10,
                width: 20,
                height: 20,
                zIndex: 9999,
                pointerEvents: 'none',
                mixBlendMode: 'difference'
            }}
        >
            <motion.div 
                animate={{ scale: isHovered ? 4 : 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'white',
                    borderRadius: '50%'
                }}
            />
        </motion.div>
    );
}