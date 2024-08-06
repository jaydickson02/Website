import Navbar from './navbar';
import Head from './head';
import Footer from './footer';

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import { Metadata } from 'next';
 
export const Metadata = {
  title: 'Jay Dickson',
  description: "Welcome to Jay Dickson's personal website. Explore my projects and learn more about my work in aerospace engineering and software development.",
};

const Layout = (props) => {
    if (props.structure === false) {
        return (
            <div>
                <Head />
                <div className="container mx-auto">
                    <Navbar activeLink={props.activeLink} />
                </div>
                <div className="px-8">
                    {props.children}
                </div>
                <Footer />
            </div>
        );
    } else {
        return (
            <div>
                <Head />
                <div className="px-8 lg:px-48">
                    <Navbar activeLink={props.activeLink} />
                    {props.children}
                    <Footer render={props.footer} />
                </div>
            </div>
        );
    }
}

export default Layout;