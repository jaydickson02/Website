import Layout from '../components/layout';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import BackgroundPattern from '../components/backgroundPattern';

const images = [
    "/aboutImages/jay-dickson.webp",
    "/aboutImages/cook-jay.webp",
    "/aboutImages/run-jay.webp",
    "/aboutImages/lm-Jay.webp",
    "/aboutImages/wine-jay.webp",
];

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const textContainerRef = useRef(null);
    const [textContainerHeight, setTextContainerHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (textContainerRef.current) {
                setTextContainerHeight(textContainerRef.current.clientHeight);
            }
        };

        // Initial height setting
        updateHeight();

        // Update height on window resize
        window.addEventListener('resize', updateHeight);
        
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <Layout activeLink={'/about'}>
            <BackgroundPattern />
            <div className="">
                <div className="flex flex-col lg:flex-row justify-center mb-8 space-x-8">
                    <div className="lg:w-7/12 mb-4 lg:mb-16">
                        <div
                            ref={textContainerRef}
                            className="p-5 rounded-2xl shadow-lg"
                            style={{ backgroundColor: 'var(--header-color)', color: 'var(--header-text-color)' }}
                        >
                            <h1 className="text-3xl font-bold mb-4">Hi, I'm Jay Dickson.</h1>
                            <p className="mb-3">
                                I am a <strong>Bachelor of Aerospace Engineering graduate from RMIT</strong>, and I couldn't be more excited about the field I've chosen to study.
                            </p>
                            <p className="mb-3">
                                In addition to my studies, I have a deep interest in a number of other fields, including Artificial Intelligence, Space, and Economics. I believe that these areas are some of the most dynamic and exciting fields in modern society, and I am always eager to learn more about them.
                            </p>
                            <p className="mb-3">
                                As a programmer, I have experience working with a variety of programming languages, including Python, JavaScript, C#, SQL, Java, R, and MATLAB. I also have experience with frameworks like React, and software such as Git, Google Admin, Active Directory, and Unix.
                            </p>
                            <p className="mb-3">
                                Currently, I am working as a <strong>Digital Technology Officer</strong> at Saint Martin of Tours School. In this role, I oversee the integration and management of technology into classrooms, perform repairs and maintenance on devices, and set up and maintain user accounts.
                            </p>
                            <p className="mb-3">
                                Feel free to check out my work and connect with me.
                            </p>
                            
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-4/12 relative">
                        <div
                            className="relative w-full h-full"
                            style={{ height: `${textContainerHeight}px` }}
                        >
                            {images.map((src, index) => (
                                <Image
                                    key={index}
                                    className={`rounded-3xl absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                                    src={src}
                                    alt="Profile"
                                    layout="fill"
                                    priority
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;