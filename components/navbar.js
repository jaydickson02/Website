import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <div>
            <nav className="container mx-auto flex justify-between items-center py-6">
                <div className="flex space-x-4">
                    <a href="/" className="text-gray-900 dark:text-gray-100 transform transition-transform duration-200 hover:scale-105 hover:text-gray-900 dark:hover:text-gray-100">
                        Jay Dickson
                    </a>
                    <a href="https://github.com/jaydickson02" className="text-gray-900 dark:text-gray-100 transform transition-transform duration-200 hover:scale-105 hover:text-gray-900 dark:hover:text-gray-100">
                        GitHub
                    </a>
                </div>
                <div className="flex space-x-4">
                    <a href="/CV.pdf" className="text-gray-900 dark:text-gray-100 transform transition-transform duration-200 hover:scale-105 hover:text-gray-900 dark:hover:text-gray-100">
                        Resume
                    </a>
                    <a href="/about" className="text-gray-900 dark:text-gray-100 transform transition-transform duration-200 hover:scale-105 hover:text-gray-900 dark:hover:text-gray-100">
                        About
                    </a>
                </div>
            </nav>
        </div>
    );
};

Navbar.propTypes = {
    activeLink: PropTypes.string.isRequired,
};

export default Navbar;