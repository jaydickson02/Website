import { Container, Alert, Row, Col } from 'react-bootstrap'
import Layout from '../shared/layout'

const login = () => {

    return(

    <Layout activeLink={'/login'}>
      
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

export default login