
import Navbar from './navbar';
import Head from './head';
import Container from 'react-bootstrap/Container'
import Footer from './footer'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

let layout = (props) => {


    if (props.structure == false) {
        return (
            <div>
                <Head />
                <Container>
                    <Navbar activeLink={props.activeLink} />
                </Container>
                {props.children}
                <Footer />
            </div>
        )
    } else if (props.background == 'true') { //Different styles and text colours for page with bg


        if (!props.colour) {
            props.colour = 'black'
        }

        let styles = {
            backgroundImage: "url(/bg/webp/" + props.bg + ".webp)", //Location to update background image
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            color: props.colour
        }

        return (
            <div style={styles}>
                <Head />
                <Container style={{ minHeight: '100vh', position: 'relative' }}>
                    <Navbar colour={props.colour} activeLink={props.activeLink} />
                    {props.children}
                    <Footer render={props.footer} colour={props.colour} />
                </Container>

            </div>
        )
    }

    return (
        <div>
            <Head />
            <Container style={{ minHeight: '100vh', position: 'relative' }}>
                <Navbar activeLink={props.activeLink} />
                {props.children}
                <Footer />
            </Container>

        </div>
    )
}

export default layout;