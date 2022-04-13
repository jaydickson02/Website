
import Navbar from './navbar';
import Head from './head';
import Container from 'react-bootstrap/Container'
import Footer from './footer'

let layout = (props) => {
    

    if(props.structure == false){
        return(
            <div>
                <Head />
                <Container>
                <Navbar activeLink={props.activeLink}/>
                </Container>
                {props.children}
                <Footer />
            </div>
            )
    } else if (props.background == 'true'){ //Different styles and text colours for page with bg

        if(!props.colour){
            props.colour = 'black'
        }

        let styles ={
            backgroundImage: "url(/bg/webp/" + props.bg + ".webp)", //Location to update background image
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            color: props.colour
        }

        return(
            <div style={styles}>
                <Head />
                <Container style={{minHeight: '92vh', position: 'relative'}}>
                <Navbar colour= {props.colour} activeLink={props.activeLink}/>
                {props.children}
                </Container>
                <Footer colour = {props.colour}/>
            </div>
        )
    }

    return(
        <div>
            <Head />
            <Container style={{minHeight: '92vh', position: 'relative'}}>
            <Navbar activeLink={props.activeLink}/>
            {props.children}
            </Container>
            <Footer />
        </div>
    )
}

export default layout;