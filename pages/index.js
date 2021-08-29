import { Container, Alert, Jumbotron, Button, Row, Col } from 'react-bootstrap'
import Layout from '../shared/layout'
import React from "react";
import MovingComponent from 'react-moving-text'

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
        <hr />

            <Alert variant={'primary'}>
                This is the landing page for Jay's Website. Welcome. We're currently under construction. Feel free to have a look around!
            </Alert>

        <hr />

        </Row>

        <Row>
          <span style={{width: '100%', marginTop: '10%',textAlign: 'center'}}>

          
            <h1 style={{fontSize: '80px'}}>
                <MovingComponent type="typewriter"
                  dataText={[
                  'Hello!',
                  "I'm Jay.",
                  "This is my site.",
                  "Thanks for visiting.",
                  'That. Is. All.',
                  'Bye!'
                ]} />
          </h1>

          <hr />
        </span>

        
        </Row>

        

            
        </Container>
    </Layout>
        )
    }
}

export default index