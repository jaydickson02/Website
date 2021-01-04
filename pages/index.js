import { Container, Alert, Jumbotron, Button } from 'react-bootstrap'
import Layout from '../shared/layout'

const index = (props) => {
    console.log(props)
return(
<Layout activeLink={'/'}>
    <Container>

    <hr />

        <Alert variant={'primary'}>
            This is the landing page for Jay's Website. Welcome. We're currently under construction. Feel free to have a look around!
        </Alert>

    <hr />
        
    </Container>
</Layout>
)
}

export default index