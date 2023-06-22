
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

let footer = (props) => {

    if(props.render == 'false'){
        return(null)
    } else {

    return(
    <Navbar sticky='bottom' className="justify-content-center">
            <Navbar.Text>
            © 2023. Built by Jay Dickson.
            </Navbar.Text>
    </Navbar>
    )
    }
}

export default footer;



