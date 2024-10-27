// src/components/Contact.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css'; 

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h3>Get In Touch</h3>
            <p style={{ margin: '10px 0 20px' }}>Need to talk or make inquiries on my work?</p>
            <div className="contact-info">
                <a href="tel:+254 113535094" className="contact-link">
                    <FaPhone className="contact-icon" /> +254 11 353 5094
                </a>
                <a href="mailto:leakonoemmanuel3@gmail.com" className="contact-link">
                    <FaEnvelope className="contact-icon" /> Email
                </a>
                <a href="https://www.linkedin.com/in/emmanuel-leakono-7125472b8/?originalSubdomain=ke" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="contact-icon" /> LinkedIn
                </a>
                <a href="https://github.com/LEAKONO" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="contact-icon" /> GitHub
                </a>
            </div>
        </section>
    );
};

export default Contact;


