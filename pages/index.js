import { Container, Alert, Jumbotron, Button, Row, Col } from 'react-bootstrap'
import Layout from '../shared/layout'
import React from "react";
import MovingComponent from 'react-moving-text'
import Image from 'next/image'

class index extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }

   /*  Sketch = (p) => {

        p.setup = () => {
         p.createCanvas(window.innerWidth - 15, window.innerHeight - 15);
        }
    
        p.draw = () => {
         p.background(220);
         p.rect(50,50,80,80);
        }
    
       p.windowResized = () => {
         p.resizeCanvas(window.innerWidth - 15, window.innerHeight - 15);
       }
     } */
    
   /*  componentDidMount() {
        const p5 = require("p5")
        this.myP5 = new p5(this.Sketch, this.myRef.current)


        <Container ref={this.myRef}> This line needs to go under layout
     } */

    render() {
        return (

    <Layout activeLink={'/'}>
      
        <Container>

        <Row>
          <span style={{width: '100%', marginTop: '10%',textAlign: 'center'}}>

          
            <h1 style={{fontSize: '4vw'}}>
                <MovingComponent type="typewriter"
                  dataText={[
                  'Hello!',
                  "This is just another website"
                ]} />
          </h1>

          <hr />
          
          <p>Hi! I'm Jay. Developing projects and just a general fasination for technology is pretty prevelant in my life. The intention is that this site will be a place to showcase such work/play. Thanks for visting.</p>
        </span>

        
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
}

export default index