
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import Layout from '../shared/layout'
import Gist from 'react-gist'

const projects =() => {

//<Gist id='19eeef42d77c1807215b23700356f6fc'/> this goes in return statement

return(

    <Layout>

    <Container>
    <Row>
        <Col>
    
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>TeaTime</Card.Title>
                <Card.Text>
                Countdown to your next cup of tea! Set your preffered interval between cups and wait. Never miss a warm cup of tea again!
                </Card.Text>
                <Button variant="primary" target="_blank" href="https://tea-time.vercel.app/">Go</Button>
            </Card.Body>
            </Card>

        </Col>

        <Col>

            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Race Day</Card.Title>
                <Card.Text>
                Always miss the MotoGP or just really like counting the seconds untill the next race? This is for you. Complete with dramatic quotes and energetic music.
                </Card.Text>
                <Button variant="primary" target="_blank" href="https://race-day.vercel.app/">Go</Button>
            </Card.Body>
            </Card>

        </Col>

        <Col>

            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Maze</Card.Title>
                <Card.Text>
                An automatically generating maze built in P5.js based upon Prims Algorithm. Nothing fancy. But pretty cool to watch.
                </Card.Text>
                <Button variant="primary" target="_blank" href="https://maze-woad.vercel.app/">Go</Button>
            </Card.Body>
            </Card>

        </Col>
        
    </Row>
    </Container>
        
        
    </Layout>
)

}

export default projects;