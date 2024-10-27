import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import profilePic from "../assets/emmanuel (1).png";
import "./Home.css";
import 'animate.css'; // Import Animate.css

const Home = () => {
    return (
        <div className="home">
            <section id="welcome" className="animate__animated animate__fadeIn">
                <div className="welcome-section">
                    <div className="welcome-content">
                        <img src={profilePic} alt="Profile" className="profile-pic animate__animated animate__zoomIn" />
                        <div className="text-content">
                            <h1 className="animate__animated animate__fadeInUp">HELLO, I'M</h1>
                            <h2 className="animate__animated animate__fadeInUp">EMMANUEL LEAKONO</h2>
                            <h3 className="animate__animated animate__fadeInUp">Full Stack Software Developer</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="animate__animated animate__fadeIn">
                <div className="about-section">
                    <h3 className="animate__animated animate__fadeInUp">About</h3>
                    <p className="animate__animated animate__fadeInUp">
                        Hi there! I'm Emmanuel Leakono. I am deeply passionate about building software that addresses real-world challenges. My journey in software engineering began during my early education, where my interest in technology and problem-solving naturally drew me to programming. This interest grew significantly when I joined Moringa School, where I spent intensive months sharpening my skills in full-stack development. Through this program, I developed a solid foundation in web technologies like HTML, CSS, JavaScript, React, and Python. I also gained hands-on experience with Git for version control and collaborative coding, database management, and building REST APIs to connect and enhance applications. Moringa School’s emphasis on practical, team-based, and challenging projects taught me how to build scalable and efficient applications that solve complex problems. Today, I am dedicated to leveraging my technical skills and collaborating with other innovators to create impactful software solutions. My ultimate goal is to push the boundaries of technology, contributing to applications that drive both innovation and success.
                    </p>
                </div>
            </section>

            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
