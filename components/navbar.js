import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

let navbar = (props) => {

    let styles = {
        paddingTop: '22px', 
        paddingBottom:'22px'
    }

    return(

        <div class="navdiv">
        <Navbar varient="dark" expand="sm" style={styles}>
        <Navbar.Brand href="/">Jay Dickson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="mr-auto"  activeKey={props.activeLink}>
            {/* <Nav.Link  href="/projects">Projects</Nav.Link> */}
            {/* <Nav.Link  href="https://blog.jaydickson.net">Blog</Nav.Link> */}
            {/* <Nav.Link  href="https://notes.jaydickson.net">Notes</Nav.Link> */}
            <Nav.Link  href="https://github.com/jaydickson02">Github</Nav.Link>

        </Nav>
          <Nav className="justify-content-end"  activeKey={props.activeLink}>
            <Nav.Link  href="/about">About</Nav.Link>
            {/* <Nav.Link  href="/login">Login</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
}

export default navbar;
