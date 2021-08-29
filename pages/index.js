import { Container, Alert, Jumbotron, Button } from 'react-bootstrap'
import Layout from '../shared/layout'
import React from "react";

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

        <hr />

            <Alert variant={'primary'}>
                This is the landing page for Jay's Website. Welcome. We're currently under construction. Feel free to have a look around!
            </Alert>

        <hr />
            
        </Container>
    </Layout>
        )
    }
}

export default index