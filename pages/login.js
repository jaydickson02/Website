import { Container, Alert, Row, Col } from 'react-bootstrap'
import Layout from '../shared/layout'


const login = () => {

    return (

        <Layout activeLink={'/login'}>

            <Container>
                <Row>
                    {/*White Sign in form using bootstrap*/}
                    {<Col xs={12} md={6} lg={4} style={{ margin: 'auto', marginTop: '10%', marginBottom: '10%' }}>

                        {/* Sign in form blend into background with small shadow*/}
                        <Alert variant="secondary" style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)' }}>

                            <Alert.Heading>Sign In</Alert.Heading>
                            <hr />
                            <form>
                                <label>
                                    <input type="text" name="email" placeholder="Email" />
                                </label>
                                <br />
                                <label>
                                    <input type="password" name="password" placeholder="Password" />
                                </label>
                                <br />
                                <input type="button" value="Log In" />
                            </form>
                        </Alert>
                        <Alert.Link href="/forgotpassword">Forgot Password?</Alert.Link>
                    </Col>}
                </Row>

            </Container>
        </Layout >

    )
}

export default login