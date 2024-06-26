import Layout from '../components/layout'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
            <Container className="mt-10">
                <Row className="justify-content-center mb-4">
                    <Col xs={12} md={7} lg={6}>
                        <div
                            ref={textContainerRef}
                            className="p-5 rounded-2xl shadow-lg"
                            style={{ backgroundColor: 'var(--header-color)', color: 'var(--header-text-color)' }}
                        >
                            <h1 className="text-3xl font-bold mb-4">Hi, I'm Jay Dickson.</h1>
                            <p className="mb-3">
                                I am currently a student of <strong>Aerospace Engineering at RMIT</strong>, and I couldn't be more excited about the field I've chosen to study.
                            </p>
                            <p className="mb-3">
                                In addition to my studies, I have a deep interest in a number of other fields, including Artificial Intelligence, Space, and Economics. I believe that these areas are some of the most dynamic and exciting fields in modern society, and I am always eager to learn more about them.
                            </p>
                            <p className="mb-3">
                                As a programmer, I have experience working with a variety of programming languages, including Python, JS, and C-Sharp as well as frameworks like React.
                            </p>
                            <p className="mb-3">
                                Currently, I am also working as a <strong>Digital Technology Officer</strong> at a Primary School, where I am responsible for overseeing the integration of technology into the classroom.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} lg={4} className="relative hidden lg:block">
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
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default About;