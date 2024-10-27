import React from 'react';
import { FaReact, FaPython, FaJsSquare, FaDatabase, FaHtml5, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiFlask, SiLinux } from 'react-icons/si';
import './Skills.css'; // Import the CSS file for Skills

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h3>Skills</h3>
            <ul>
                <li><FaJsSquare className="icon" /> JavaScript</li>
                <li><FaPython className="icon" /> Python</li>
                <li><FaReact className="icon" /> React</li>
                <li><SiTailwindcss className="icon" /> Tailwind CSS</li>
                <li><FaDatabase className="icon" /> SQL</li>
                <li><SiPostgresql className="icon" /> PostgreSQL</li>
                <li><FaHtml5 className="icon" /> HTML5</li>
                <li><SiFlask className="icon" /> Flask</li>
                <li><FaGithub className="icon" /> GitHub</li>
                <li><SiLinux className="icon" /> Linux</li>
            </ul>
        </section>
    );
};

export default Skills;

