
import Navbar from 'react-bootstrap/Navbar'

let footer = (props) => {

    if(props.render == 'false'){
        return(null)
    } else {

    return(
    <Navbar sticky='bottom' className="justify-content-center">
            <Navbar.Text style={{color: props.colour}}>
            © 2022. Built by Jay Dickson.
            </Navbar.Text>
    </Navbar>
    )
    }
}

export default footer;