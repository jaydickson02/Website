import Layout from '../shared/layout'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const about = () => {


    return(

        <Layout activeLink={'/about'}>
        <Container>

        <Row>
            <div style={{paddingTop: '10%'}}>
            <Image  src="/InfoCard.png" alt="me" width="1200" height="500" />
            </div>
        </Row>
        
        <Row>
          <span style={{width: '100%', marginTop: '10%',textAlign: 'center'}}>

          <span style={{padding: '10px'}}>
          <a target="_blank" href="https://twitter.com/rubbergoldfsh">
          <Image  src="/twitterIcon.png" alt="twitter" width="48" height="48"/>
          </a>
          </span>

          <span style={{padding: '10px'}}>
          <a target="_blank" href="https://www.instagram.com/jaydickson02/">
          <Image  src="/instagramIcon.png" alt="instagram" width="48" height="48"/>
          </a>
          </span>

          <span style={{padding: '10px'}}>
          <a target="_blank" href="https://github.com/jaydickson02">
          <Image  src="/githubIcon.png" alt="github" width="48" height="48"/>
          </a>
          </span>
          
          </span>

        
        </Row>

        </Container>

        </Layout>
    )
}

export default about