
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import Layout from '../shared/layout'

const projects = () => {


    let bgPic = "bg9"
    let themeColour = "black"

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
        "Race Day": {
            "description": "Always miss the MotoGP or just really like counting the seconds untill the next race? This is for you. Complete with dramatic quotes and energetic music."
        }
    }

    //Auto generate prject cards
    let cards = []
    for (let project in projectInformation) {
        cards.push(
            <Col sm={12} lg={4}>
                <Card style={{ width: '100%', height: '240px', backgroundColour: 'black' }}>
                    <Card.Body>
                        <Card.Title>{project}</Card.Title>
                        <Card.Text>
                            {projectInformation[project].description}
                        </Card.Text>
                        <Button variant="primary" target="_blank" href={projectInformation[project].link}>Go</Button>
                    </Card.Body>
                </Card>
                <hr style={{ backgroundColor: themeColour, margin: 22 }} />
            </Col>
        )
    }


    return (

        //Layout is a wrapper for the page. It handles the navbar and footer.

        <Layout bg={bgPic} background='true' colour={themeColour} activeLink={'/projects'}>
            <h1 style={{ color: themeColour }}>Projects</h1>
            <Container>
                <Row>
                    {cards}
                </Row>
            </Container>

        </Layout>
    )

}

export default projects;