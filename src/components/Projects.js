import React from 'react';
import project1 from '../assets/fintrack.png';
import project2 from '../assets/asset.png';
import project3 from '../assets/tablet.jpeg';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Fintrack',
            description: "The financial management tracker project helps users manage their finances effectively, featuring tools for tracking income and expenses, creating budgets, and analyzing spending patterns. With a user-friendly interface and secure authentication, the application employs data visualization tools to present financial data clearly. Utilizing Flask for the backend and React for the frontend, the goal is to empower users to make informed financial decisions and improve their overall financial health.",
            image: project1,
            repoLink: 'https://github.com/LEAKONO/Budget-Trucker', 
            liveLink: 'https://budget-trucker.vercel.app/' 
        },
        {
            title: 'Asset Inventory',
            description: `Asset inventory is designed to help organizations efficiently manage their assets. It includes features for tracking and organizing various assets, allowing users to add, update, and delete asset information. The system supports user authentication, ensuring secure access with role-based permissions for different user types, such as admins and regular employees. The project utilizes a backend framework like Flask for robust data management and a frontend framework like React for a user-friendly interface.`,
            image: project2,
            repoLink: 'https://github.com/calebkomen/Frontend-asset-inventory-management-phase5',
            liveLink: 'https://project-two.com'
        },
        {
            title: 'TaskManager App',
            description: 'The Taskmaster app is a collaborative task management tool that allows users to create and assign tasks to their friends. Upon assignment, friends receive notifications about their new tasks. Users can easily organize their tasks using a drag-and-drop interface to move tasks between "To Do," "In Progress," and "Completed" categories. The app requires user authentication for secure access and is built using React for the frontend and Flask for the backend, ensuring a seamless and interactive user experience.',
            image: project3,
            repoLink: 'https://github.com/yourusername/project-three',
            liveLink: 'https://project-three.com'
        },
    ];

    return (
        <section id="projects">
            <h2>My Recent Works</h2>
            <h3>Check out some of my past work.</h3>
            <div className="projects-container">
                {projects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h4>{project.title}</h4>
                        <div className="project-links">
                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Project</a>
                        </div>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
            <div className="more-work">
                <a href="https://github.com/LEAKONO" target="_blank" rel="noopener noreferrer" className="github-link">
                    MORE WORKS
                </a>
            </div>
        </section>
    );
};

export default Projects;
