// import React from "react";
import "../css/navbar.scss";
import logo from "../assets/signature.png";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const handleProjectsClick = () => {
        const projctSection = document.getElementById("project");
        const offsetTop = projctSection.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
    };

    const handlelogoCLick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSkillsClick = () => {
        const skillsSection = document.getElementById("skills");
        const offsetTop = skillsSection.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
    };

    const handleEducationSection = () => {
        const educationSection = document.getElementById("education");
        const offsetTop = educationSection.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
    };

    const handleContactClick = () => {
        const contactSection = document.getElementById("contact");
        const offsetTop = contactSection.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
    };

    return (
        <div className="navbar ">
            <div
                className=" animate__animated animate__fadeInDown "
                id="logo"
                onClick={handlelogoCLick}
            >
                <ScrollLink
                    to="homepage"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <a href="#top" className="leftLogo">
                        <img src={logo} alt="" className="logo" />
                    </a>
                </ScrollLink>
            </div>
            <div className="rightNav">
                <ul>
                    <li
                        className="animate__animated animate__fadeInDown"
                        style={{ animationDelay: "50ms" }}
                    >
                        <ScrollLink
                            to="project"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <a href="#project" onClick={handleProjectsClick}>
                                <span className="projects" href="/">
                                    Projects
                                </span>
                            </a>
                        </ScrollLink>
                    </li>
                    <li
                        className="animate__animated animate__fadeInDown"
                        style={{ animationDelay: "100ms" }}
                    >
                        <ScrollLink
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <a href="#skills" onClick={handleSkillsClick}>
                                <span className="skills" href="/">
                                    Skills
                                </span>
                            </a>
                        </ScrollLink>
                    </li>
                    <li
                        className="animate__animated animate__fadeInDown"
                        style={{ animationDelay: "150ms" }}
                    >
                        <ScrollLink
                            to="background"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <a
                                href="#background"
                                onClick={handleEducationSection}
                            >
                                <span className="background" href="/">
                                    Background
                                </span>
                            </a>
                        </ScrollLink>
                    </li>
                    <li
                        className="animate__animated animate__fadeInDown"
                        style={{ animationDelay: "250ms" }}
                    >
                        <ScrollLink
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <a href="#contact" onClick={handleContactClick}>
                                <span className="contact" href="/">
                                    Contact
                                </span>
                            </a>
                        </ScrollLink>
                    </li>
                    <li className="animate__animated animate__fadeInDown">
                        <a href="https://drive.google.com/file/d/1gZweTRYMIL-LZpS9QASZ0FclUI0-qiLA/view?usp=sharing">
                            <span className="resume" href="/">
                                Resume
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
