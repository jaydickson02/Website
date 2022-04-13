import {Row, Col} from 'react-bootstrap'
import Layout from '../shared/layout'
import React from "react";
import Image from 'next/image'
import Form from 'react-bootstrap/Form'
import Switch from '@mui/material/Switch'


class index extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
      this.state = {
        iconColour: 'white', //Icon sizes of 48 should work for the black versions
        themeColour: 'black',
        bgPic: "bg6"
      };
    }

    render() {

        let darkmode = () => {
            if(this.state.themeColour == 'black'){ 
                this.setState({iconColour: 'white'}) //Dark Mode Settings
                this.setState({themeColour: 'white'})
                this.setState({bgPic: 'bg15'})
            } else {
                this.setState({iconColour: 'white'}) //Light Mode Settings
                this.setState({themeColour: 'black'})
                this.setState({bgPic: 'bg6'})
            }
            
        }

        

        return (

        <Layout bg={this.state.bgPic} background='true' colour={this.state.themeColour} activeLink={'/'}>
        <hr style={{backgroundColor: this.state.themeColour, margin: 0, marginLeft: 22, marginRight: 22}} />

        <Row>
            <Col xs={6} sm={6} lg={6} style={{width: '100%', marginTop: '0%', padding: '22px', textAlign: 'left'}}>
          <span >

          <span style={{padding: '10px'}}>
          <a target="_blank" href="https://twitter.com/rubbergoldfsh">
          <Image src={"/SM/twitterIcon-" + this.state.iconColour + ".png"} alt="twitter" width="32" height="32"/> 
          </a>
          </span>

          <span style={{padding: '10px'}}>
          <a target="_blank" href="https://www.instagram.com/jaydickson02/">
          <Image src={"/SM/instagramIcon-" + this.state.iconColour + ".png"} alt="instagram" width="32" height="32"/>
          </a>
          </span>

          <span style={{padding: '10px'}}>
          <a target="_blank" href="https://github.com/jaydickson02">
          <Image src={"/SM/githubIcon-" + this.state.iconColour + ".png"} alt="github" width="32" height="32"/>
          </a>
          </span>
          
        </span>
            </Col>
            <Col xs={6} sm={6} lg={6} style={{width: '100%', marginTop: '0%', padding: '22px'}}>
                <div style={{display: 'flex', alignItems: 'right', justifyContent: 'right'}}>
                <Switch 
                size="large"
                onChange={darkmode}
                />
                </div>
            </Col>
        
        </Row>
        

        
    </Layout>        
        )
    }
}

export default index
