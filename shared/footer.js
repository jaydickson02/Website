
import Navbar from 'react-bootstrap/Navbar'

let footer = (props) => {

    return(
    <Navbar sticky='bottom' className="justify-content-center" style={{marginTop:'5px'}}>
            <Navbar.Text style={{color: props.colour}}>
            © 2020. Built by Jay Dickson.
            </Navbar.Text>
    </Navbar>
    )
}

export default footer;