// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Emmanuel Leakono. All rights reserved.</p>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/emmanuel-leakono-7125472b8/?originalSubdomain=ke" target="_blank" rel="noopener noreferrer" className="footer-link">
                        <FaLinkedin className="footer-icon" /> LinkedIn
                    </a>
                    <a href="https://github.com/LEAKONO" target="_blank" rel="noopener noreferrer" className="footer-link">
                        <FaGithub className="footer-icon" /> GitHub
                    </a>
                </div>
                <div className="footer-contact">
                    <p className="footer-contact-item">
                        <FaEnvelope className="footer-icon" /> <a href="mailto:leakonoemmanuel3@gmail.com">leakonoemmanuel3@gmail.com</a>
                    </p>
                    <p className="footer-contact-item">
                        <FaPhone className="footer-icon" /> <a href="tel:+254 113535094">+254 113535094</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
