import {Row, Col} from 'react-bootstrap'
import Layout from '../shared/layout'
import React from "react";
import Image from 'next/image'


class index extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }

    render() {

        let themeColour = 'black'
        
        let iconColour = 'white' //Icon sizes of 48 should work for the black versions
        
        let bgPic = "bg6"

        return (

        <Layout bg={bgPic} background='true' colour={themeColour} activeLink={'/'}>
        <hr style={{backgroundColor: themeColour, margin: 0, marginLeft: 22, marginRight: 22}} />
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
}

export default index
