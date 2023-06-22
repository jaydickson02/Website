import { Container, Alert, Row, Col } from 'react-bootstrap'
import Layout from '../components/layout'

const notes = () => {

    return(

    <Layout activeLink={'/notes'}>
      
        <Container>
        <Row>
        <hr />

            <Alert variant={'primary'}>
                Welcome. We're currently under construction. Feel free to have a look around!
            </Alert>

        <hr />

        </Row>
        </Container>
    </Layout>
    
    )
}

export default notes