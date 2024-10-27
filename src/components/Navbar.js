// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#welcome">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;


