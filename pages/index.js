import {Row, Col} from 'react-bootstrap'
import Layout from '../shared/layout'
import React from "react";
import Image from 'next/image'
import Switch from '@mui/material/Switch'
import { checkCookies, getCookie, setCookies, removeCookies } from 'cookies-next';


class index extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
      this.state = {
        iconColour: 'white', //Icon sizes of 48 should work for the black versions
        themeColour: 'black',
        bgPic: "bg6",
        darkmode: "light",
        check: false
      };
    }

    darkmode(mode){
        if(mode == 'dark'){ 
                
            this.setState({ //Dark Mode Settings
            iconColour: 'white', 
            themeColour: 'white', 
            bgPic: 'bg15', 
            darkmode: 'dark',
            check: true}) 

            setCookies('darkmode', 'dark');

        } else if(mode == 'light'){ 

            this.setState({ //Light Mode Settings
                iconColour: 'white', 
                themeColour: 'black', 
                bgPic: 'bg6', 
                darkmode: 'light', 
                check: false})

            setCookies('darkmode', 'light');
        }
    }
    
    componentDidMount() {

        //Cookies for darkmode/lightmode

        //Check for a cookie, make one if none exist
        if(!checkCookies('darkmode')){ 
            setCookies('darkmode', 'light')
        }

        //Set darkmode based on cookie before page load
        if(getCookie('darkmode') == 'dark'){ 

            this.setState({ //Dark Mode Settings
                iconColour: 'white', 
                themeColour: 'white', 
                bgPic: 'bg15', 
                darkmode: 'dark',
                check: true}) 
    
          } else if(getCookie('darkmode') == 'light'){ //lightmode
    
            this.setState({ //Light Mode Settings
                iconColour: 'white', 
                themeColour: 'black', 
                bgPic: 'bg6', 
                darkmode: 'light', 
                check: false})
          }
    }

    render() {

        //Swap darkmode to the opposite of the current value
        let darkswap = () => { 
            if(this.state.darkmode == 'dark'){
                this.darkmode('light')
                
            } else {
                this.darkmode('dark')
                
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
                checked={this.state.check}
                size="large"
                onChange={darkswap}
                />
                </div>
            </Col>
        
        </Row>
        
    </Layout>        
        )
    }
}

export default index
