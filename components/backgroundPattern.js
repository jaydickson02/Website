import React, { useEffect, useState } from 'react';

const BackgroundPattern = () => {
    const [documentHeight, setDocumentHeight] = useState(0);
    const [shapeElements, setShapeElements] = useState([]);

    useEffect(() => {
        const updateHeight = () => {
            setDocumentHeight(document.documentElement.scrollHeight);
        };

        // Set initial height
        updateHeight();

        // Update height on resize and scroll
        window.addEventListener('resize', updateHeight);
        window.addEventListener('scroll', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
            window.removeEventListener('scroll', updateHeight);
        };
    }, []);

    useEffect(() => {
        const shapes = ['circle', 'triangle', 'square'];
        const getRandomShape = () => shapes[Math.floor(Math.random() * shapes.length)];
        const getRandomDelay = () => Math.random() * 6;

        const newShapeElements = Array.from({ length: 500 }).map((_, index) => {
            const shapeType = getRandomShape();
            const top = Math.random() * documentHeight;
            const left = Math.random() * 100;
            const delay = getRandomDelay();
            return (
                <div
                    key={index}
                    className={`shape ${shapeType}`}
                    style={{
                        top: `${top}px`,
                        left: `${left}%`,
                        animationDelay: `${delay}s`,
                        animationName: 'shimmer'
                    }}
                />
            );
        });
        setShapeElements(newShapeElements);
    }, [documentHeight]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ height: documentHeight }}>
            {shapeElements}
        </div>
    );
};

export default BackgroundPattern;