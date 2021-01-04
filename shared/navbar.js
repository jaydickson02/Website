import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

let navbar = (props) => {

    return(
        
        <Navbar varient="light" expand="sm" style={{paddingTop: '22px', paddingBottom:'22px'}}>
        <Navbar.Brand href="/">DropIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="mr-auto"  activeKey={props.activeLink}>
            <Nav.Link href="/devices">Devices</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
        </Nav>
          <Nav className="justify-content-end"  activeKey={props.activeLink}>
            <Nav.Link href="/settings">Settings</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    )
}

export default navbar;