import { Row, Col } from 'react-bootstrap'
import Layout from '../shared/layout'
import React from "react";
import Image from 'next/image'
import { Card, Button, Container } from 'react-bootstrap'

class index extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    render() {

            let projectInformation = {
                "TeaTime": {
                    "description": "Countdown to your next cup of tea! Set your preffered interval between cups and wait. Never miss a warm cup of tea again!",
                    "link": "https://jaydickson02.github.io/TeaTime/"
                },
                "Visual PI": {
                    "description": "A way to visulise PI geometrically. Using polygons to get increasingly accurate estimates for pi.",
                    "link": "https://jaydickson02.github.io/visualPi"
                },
                "Maze": {
                    "description": "An automatically generating maze built in P5.js based upon Prims Algorithm. Nothing fancy. But pretty cool to watch.",
                    "link": "https://jaydickson02.github.io/Maze/"
                },
                "Find the Target": {
                    "description": "Genetic Algorithm that attempts to make its way to the goal. It has to get around an obstacle to do so.",
                    "link": "https://jaydickson02.github.io/FindTheTarget"
                },
                "MineSweeper": {
                    "description": "The classic game Minesweeper. Built with P5.js.",
                    "link": "https://jaydickson02.github.io/Minesweeper/"
                },
                "Orbits": {
                    "description": "A simulation of the earth with a set of satellites orbiting.",
                    "link": "https://jaydickson02.github.io/Orbits/"
                }

            }
        
            //Auto generate project cards
            let cards = []
            for (let project in projectInformation) {
                cards.push(
                    <Col sm={12} lg={4}>
                        <Card style={{ width: '100%', height: '240px'}}>
                            <Card.Body>
                                <Card.Title>{project}</Card.Title>
                                <Card.Text>
                                    {projectInformation[project].description}
                                </Card.Text>
                                <Button variant="primary" target="_blank" href={projectInformation[project].link}>Go</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            }

        return (

            <Layout activeLink={'/'}>

                {/* <hr style={{margin: 0, marginLeft: 22, marginRight: 22 }} /> */}

                <Container>
                <Row>
                    {cards}
                </Row>
                </Container>

                <Row>
                    <Col xs={8} sm={8} lg={6} style={{ width: '100%', marginTop: '0%', padding: '22px', textAlign: 'left' }}>
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
