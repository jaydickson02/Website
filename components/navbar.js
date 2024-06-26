import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';

const CustomNavbar = (props) => {
    const styles = {
        paddingTop: '22px', 
        paddingBottom: '22px',
    };

    return (
        <div className="navdiv">
            <Navbar variant="dark" expand="sm" style={styles}>
                <Navbar.Brand href="/">Jay Dickson</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" activeKey={props.activeLink}>
                        <Nav.Link href="https://github.com/jaydickson02">GitHub</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end" activeKey={props.activeLink}>
                        <Nav.Link href="/CV.pdf">Resume</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

CustomNavbar.propTypes = {
    activeLink: PropTypes.string.isRequired,
};

export default CustomNavbar;