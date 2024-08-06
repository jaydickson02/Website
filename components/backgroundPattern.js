import React, { useEffect, useState } from 'react';

const BackgroundPattern = () => {
    const [shapeElements, setShapeElements] = useState([]);

    useEffect(() => {
        const shapes = ['circle', 'triangle', 'square'];
        const getRandomShape = () => shapes[Math.floor(Math.random() * shapes.length)];

        const newShapeElements = Array.from({ length: 100 }).map((_, index) => {
            return (
                <div
                    key={index}
                    className={`shape ${getRandomShape()} opacity-0 shimmer`}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 6}s`,
                    }}
                />
            );
        });
        setShapeElements(newShapeElements);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
            {shapeElements}
        </div>
    );
};

export default BackgroundPattern;