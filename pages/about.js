import Layout from '../shared/layout'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const about = () => {

    let themeColour = "black"
    let iconColour = "white"
    let bgPic = "bg9"


    return(

        <Layout bg={bgPic} background='true' colour={themeColour} activeLink={'/about'}>

            <hr style={{backgroundColor: themeColour, margin: 0, marginLeft: 22, marginRight: 22, marginBottom: 22}} />
        <Row>
            <div style={{padding: '0%'}}>
            <Image src="/InfoCard.png" alt="About Card" width="1200" height="500" />
            </div>
        </Row>
        
        
        <Row>
          <span style={{width: '100%', marginTop: '0%', padding: '22px', textAlign: 'left'}}>

          <span style={{padding: '10px'}}>
          <a target="_blank" href="https://twitter.com/rubbergoldfsh">
          <Image src={"/SM/twitterIcon-" + iconColour + ".png"} alt="twitter" width="32" height="32"/> 
          </a>
          </span>

          <span style={{padding: '10px'}}>
          <a target="_blank" href="https://www.instagram.com/jaydickson02/">
          <Image src={"/SM/instagramIcon-" + iconColour + ".png"} alt="instagram" width="32" height="32"/>
          </a>
          </span>

          <span style={{padding: '10px'}}>
          <a target="_blank" href="https://github.com/jaydickson02">
          <Image src={"/SM/githubIcon-" + iconColour + ".png"} alt="github" width="32" height="32"/>
          </a>
          </span>
          
        </span>

        
        </Row>

        </Layout>
    )
}

export default about