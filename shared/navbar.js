import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import { faBars, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let navbar = (props) => {

    let styles = {
        paddingTop: '22px', 
        paddingBottom:'22px'
    }

    if(props.colour){
        return(
            
            <Navbar varient="dark" expand="sm" style={styles}>
            <Navbar.Brand style={{color: props.colour}} href="/"><FontAwesomeIcon style={{color: props.colour, paddingRight: 8, paddingLeft: 10}} icon={faRocket} />Jay Dickson </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" ><FontAwesomeIcon style={{color: props.colour}} icon={faBars}/></Navbar.Toggle>
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="mr-auto"  activeKey={props.activeLink}>
                <Nav.Link style={{color: props.colour}} href="/projects">Projects</Nav.Link>
                <Nav.Link style={{color: props.colour}} href="/notes">Notes</Nav.Link>
    
            </Nav>
              <Nav className="justify-content-end"  activeKey={props.activeLink}>
                <Nav.Link style={{color: props.colour}} href="/about">About</Nav.Link>
                <Nav.Link style={{color: props.colour}} href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
        )
    }
    return(

        <Navbar varient="dark" expand="sm" style={styles}>
        <Navbar.Brand href="/">Jay Dickson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="mr-auto"  activeKey={props.activeLink}>
            <Nav.Link  href="/projects">Projects</Nav.Link>
            <Nav.Link  href="/notes">Notes</Nav.Link>

        </Nav>
          <Nav className="justify-content-end"  activeKey={props.activeLink}>
            <Nav.Link  href="/about">About</Nav.Link>
            <Nav.Link  href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    )
}

export default navbar;