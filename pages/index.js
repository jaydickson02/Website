import Layout from '../components/layout';
import React from 'react';
import Image from 'next/image';
import Highlights from '../components/highlights';
import Card from '../components/card';
import BackgroundPattern from '../components/backgroundPattern';

const projectInformation = {
    projects: {
        "Maze": {
            "image": "/Project Images/Coded/Maze.png",
            "description": "An automatically generating maze built in P5.js based upon Prims Algorithm. Nothing fancy. But pretty cool to watch.",
            "link": "https://jaydickson02.github.io/Maze/"
        },
        "MineSweeper": {
            "image": "/Project Images/Coded/Minesweeper.png",
            "description": "The classic game Minesweeper. Built with P5.js.",
            "link": "https://jaydickson02.github.io/Minesweeper/"
        },
        "Visual PI": {
            "image": "/Project Images/Coded/VisualPi.png",
            "description": "A way to visualise PI geometrically. Using polygons to get increasingly accurate estimates for pi.",
            "link": "https://jaydickson02.github.io/visualPi"
        },
        "Hunting Dots": {
            "image": "/Project Images/Coded/HuntingDots.png",
            "description": "Genetic Algorithm that attempts to make its way to the goal. It has to get around obstacles to do so.",
            "link": "https://jaydickson02.github.io/Hunting-Dots/"
        },
        "Data and Dragons": {
            "image": "/Project Images/Coded/DataDragons.png",
            "description": "A Dungeons and Dragons campaign tracker and note manager. Built with React and Next.js.",
            "link": "https://data-and-dragons.vercel.app/"
        },
        "Orbits": {
            "image": "/Project Images/Coded/Orbits.png",
            "description": "A simple simulation of circular orbits. Accelerations can be applied along track.",
            "link": "https://jaydickson02.github.io/Orbits/"
        },
        "TeaTime": {
            "image": "/Project Images/Coded/TeaTime.png",
            "description": "Countdown to your next cup of tea! Set your preferred interval between cups and wait. Never miss a warm cup of tea again! Part of a challenge to build something fun in 2 hours.",
            "link": "https://jaydickson02.github.io/TeaTime/"
        },
        "Notes": {
            "image": "/Project Images/Coded/Notes.png",
            "description": "A simple note taking app used for taking university notes and storing resources. Built with Jekyll. Work in progress!",
            "link": "https://jaydickson02.github.io/Notes/"
        },
    },
    reports: {
        "DQL for Trusted Satellite Operations": {
            "image": "/Project Images/Assignments/DQL.png",
            "description": "The Final report for my RMIT Capstone project considering Deep Q-Learning and its uses in managing satellite formations.",
            "link": "/PDFs/UniversityProjects/Deep Q-Learning DSS.pdf"
        },
        "QBot 2 Automatic Navigation and Response": {
            "image": "/Project Images/Assignments/Qbot.png",
            "description": "RMIT Project where a robot was programmed to navigate a maze and respond to stimuli. This report details the design and testing of the robot.",
            "link": "/PDFs/UniversityProjects/Autonomous Systems Report.pdf"
        },
        "Coffee Cup Sloshing": {
            "image": "/Project Images/Assignments/LitReview.png",
            "description": "A literature review and research proposal for a project to reduce the danger of burns due to coffee cup sloshing.",
            "link": "/PDFs/UniversityProjects/Assignment 3 Proposal.pdf"
        },
        "Martian Moons Exploration Vehicle": {
            "image": "/Project Images/Assignments/MartianMoons.png",
            "description": "A literature review into the design of a vehicle to explore the Martian moons. Written prior to a team project to design the vehicle.",
            "link": "/PDFs/UniversityProjects/Martian Moons Vehicle.pdf"
        },
        "Static and Vibrational Analysis of a U-2 Wing": {
            "image": "/Project Images/Assignments/U2.png",
            "description": "FEA Analysis of a U-2 wing using Abacus CAE.",
            "link": "/PDFs/UniversityProjects/Static Vibrational Analysis U-2 Wing.pdf"
        },
        "Satellite Data Retrieval and Analysis": {
            "image": "/Project Images/Assignments/SatelliteData.png",
            "description": "Analysis of a starlink satellites orbit given ephemris data. Looks at orbital values and the effect of perturbations.",
            "link": "/PDFs/UniversityProjects/Satellite Data Retrieval Assignment.pdf"
        },
    }
};

const Index = () => {
    // Generate project cards
    const projectCards = Object.keys(projectInformation.projects).map(project => {
        const { link, description, image } = projectInformation.projects[project];
        return (
            <div className="w-full md:w-1/2 lg:w-1/3 p-2.5" key={project}>
                <Card title={project} description={description} link={link} image={image} />
            </div>
        );
    });

    // Generate report cards
    const reportCards = Object.keys(projectInformation.reports).map(report => {
        const { link, description, image } = projectInformation.reports[report];
        return (
            <div className="w-full md:w-1/2 lg:w-1/3 p-2.5" key={report}>
                <Card title={report} description={description} link={link} image={image} />
            </div>
        );
    });

    return (
        <Layout activeLink={'/'}>
            <BackgroundPattern />
            <div className="relative">
                <Highlights />

                <div className="container mx-auto mt-10">
                    <div className="block rounded-xl shadow-lg p-4" style={{ backgroundColor: 'var(--header-color)', color: 'var(--header-text-color)' }}>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Projects
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-200">
                            Explore a selection of my personal projects, each designed to showcase various programming skills and creativity. From classic games to unique simulations, these projects highlight my journey through learning and experimentation.
                        </p>
                    </div>
                    <div className="flex flex-wrap mt-6">
                        {projectCards}
                    </div>
                </div>

                <div className="container mx-auto mt-10">
                    <div className="block rounded-xl shadow-lg p-4" style={{ backgroundColor: 'var(--header-color)', color: 'var(--header-text-color)' }}>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Reports
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-200">
                            Dive into detailed reports on various academic and professional research topics. These documents reflect my thorough investigations and findings in areas like satellite formations, computational algorithms, and aerospace engineering analyses.
                        </p>
                    </div>
                    <div className="flex flex-wrap mt-6">
                        {reportCards}
                    </div>
                </div>

                <div className="container ml-10 mt-10 flex justify-start">
                <div className="flex space-x-4">
            <a target="_blank" href="https://twitter.com/rubbergoldfsh" aria-label="Twitter" rel="noopener noreferrer">
                <Image 
                    className="autoFilter" 
                    src="/Icons/twitter.svg" 
                    alt="Twitter" 
                    width="22" 
                    height="22" 
                    priority 
                />
            </a>
            <a target="_blank" href="https://github.com/jaydickson02" aria-label="GitHub" rel="noopener noreferrer">
                <Image 
                    className="autoFilter" 
                    src="/Icons/github.svg" 
                    alt="GitHub" 
                    width="22" 
                    height="22" 
                    priority 
                />
            </a>
        </div>

                </div>
            </div>
        </Layout>
    );
};

export default Index;