import { Row, Col } from 'react-bootstrap'
import Layout from '../components/layout'
import React from "react";
import Image from 'next/image'
import Highlights from '../components/highlights';
import Card from '../components/card';

class index extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    render() {

            let projectInformation = {
                "Maze": {
                    "image": "https://i.imgur.com/0mieqFR.png",
                    "description": "An automatically generating maze built in P5.js based upon Prims Algorithm. Nothing fancy. But pretty cool to watch.",
                    "link": "https://jaydickson02.github.io/Maze/"
                },
                "MineSweeper": {
                    "image": "https://i.imgur.com/L4g1g4G.png",
                    "description": "The classic game Minesweeper. Built with P5.js.",
                    "link": "https://jaydickson02.github.io/Minesweeper/"
                },
                "Visual PI": {
                    "image": "https://i.imgur.com/RHSNpCV.png",
                    "description": "A way to visulise PI geometrically. Using polygons to get increasingly accurate estimates for pi.",
                    "link": "https://jaydickson02.github.io/visualPi"
                },
                "Find the Target": {
                    "image": "https://i.imgur.com/5KEcYsS.png",
                    "description": "Genetic Algorithm that attempts to make its way to the goal. It has to get around an obstacle to do so.",
                    "link": "https://jaydickson02.github.io/FindTheTarget"
                },
                "DQL Report": {
                    "image": "https://i.imgur.com/RriqRmd.png",
                    "description": "The Final report for my RMIT Capstone project considering Deep Q-Learning and its uses in managing satellite formations.",
                    "link": "/PDFs/UniversityProjects/Deep Q-Learning DSS.pdf"
                },
                "DQL for Trusted Satellite Operations": {
                    "image": "https://i.imgur.com/eus9jTS.png",
                    "description": "RMIT in capstone project. Using Deep Q Learning to train a satellite formation to operate autonomously. Built with Python and Tensorflow.",
                    "link": "https://github.com/jaydickson02/Capstone"
                },
                "Coffee Cup Sloshing": {
                    "image": "https://i.imgur.com/vhJxHRy.png",
                    "description": "A literature review and research proposal for a project to reduce the danger of burns due to coffee cup sloshing.",
                    "link": "/PDFs/UniversityProjects/Assignment 3 Proposal.pdf"
                },
                "Martian Moons Exploration Vehicle": {
                    "image": "https://i.imgur.com/eJHe2fc.png",
                    "description": "A literature review into the design of a vehicle to explore the Martian moons. Written prior to a team project to design the vehicle.",
                    "link": "/PDFs/UniversityProjects/Martian Moons Vehicle.pdf"
                },
                "Static and Vibrational Analysis of a U-2 Wing": {
                    "image": "https://i.imgur.com/rMZoWzG.png",
                    "description": "FEA Analysis of a U-2 wing using Abacus CAE.",
                    "link": "/PDFs/UniversityProjects/Static Vibrational Analysis U-2 Wing.pdf"
                },
                "Satellite Data Retrieval and Analysis": {
                    "image": "https://i.imgur.com/eCaMQsd.png",
                    "description": "Analysis of a starlink satellites orbit given ephemris data. Looks at orbital values and the effect of perturbations.",
                    "link": "/PDFs/UniversityProjects/Satellite Data Retrieval Assignment.pdf"
                },
                "Data and Dragons": {
                    "image": "https://i.imgur.com/6E0EKEQ.png",
                    "description": "A Dungeons and Dragons campaign tracker and note manager. Built with React and Next.js.",
                    "link": "https://data-and-dragons.vercel.app/"
                },
                "Orbits": {
                    "image": "https://i.imgur.com/793b1zC.png",
                    "description": "A simple simulation of circular orbits. Accelerations can be applied along track.",
                    "link": "https://jaydickson02.github.io/Orbits/"
                },
                "TeaTime": {
                    "image": "https://i.imgur.com/5mvx449.png",
                    "description": "Countdown to your next cup of tea! Set your prefered interval between cups and wait. Never miss a warm cup of tea again! Part of a challenge to build something fun in 2 hours.",
                    "link": "https://jaydickson02.github.io/TeaTime/"
                },
                "Notes": {
                    "image": "https://i.imgur.com/P3OpDxr.png",
                    "description": "A simple note taking app used for taking university notes and storing resources. Built with Jekyll. Work in progress!",
                    "link": "https://jaydickson02.github.io/Notes/"
                },
            }
        
            //Auto generate project cards
            let cards = []
            for (let project in projectInformation) {
                
                let link = projectInformation[project].link
                let description = projectInformation[project].description
                let title = project
                let image = projectInformation[project].image

                cards.push(
                    <Col sm={12} md={6} lg={4}>
                        <Card title={title} description={description} link={link} image={image}/>
                    </Col>
                )
            }

        return (

            <Layout activeLink={'/'}>

                {/* <hr style={{margin: 0, marginLeft: 22, marginRight: 22 }} /> */}

                <Highlights />

                <div class="mt-10">
                <Row>
                    {/* <NewCard /> */}
                    {cards}
                </Row>
                </div>

                <Row>
                    <Col xs={8} sm={8} lg={6} style={{ width: '100%', marginTop: '0%', textAlign: 'left'}}>
                        <span class="icons">

                            <span style={{ padding: '10px' }}>
                                <a target="_blank" href="https://twitter.com/rubbergoldfsh">
                                    <Image class="autoFilter" src={"/Icons/twitter.svg"} alt="twitter"
                                     width="22" height="22"/>
                                </a>
                            </span>

                            <span style={{ padding: '10px' }}>
                                <a target="_blank" href="https://github.com/jaydickson02">
                                    <Image class="autoFilter" src={"/Icons/github.svg"} alt="github" width="22" height="22" />
                                </a>
                            </span>


                        </span>
                    </Col>

                    

                </Row>

            </Layout>
        )
    }
}

export default index
