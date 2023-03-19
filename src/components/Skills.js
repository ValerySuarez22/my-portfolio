import React, { useState } from "react";
import {
    FaFigma,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaBootstrap,
    FaSass,
    FaReact,
    FaSymfony,
    FaPhp,
    FaNode,
    FaGithub,
} from "react-icons/fa";
import "../styles/skills.css";

const Skills = () => {
    const [skillsData] = useState([
        { icon: <FaFigma />, title: "Figma" },
        { icon: <FaHtml5 />, title: "HTML 5" },
        { icon: <FaCss3Alt />, title: "CSS" },
        { icon: <FaJsSquare />, title: "JavaScript" },
        { icon: <FaBootstrap />, title: "Bootstrap" },
        { icon: <FaSass />, title: "sass" },
        { icon: <FaReact />, title: "React" },
        { icon: <FaSymfony />, title: "Symfony" },
        { icon: <FaPhp />, title: "PHP" },
        { icon: <FaNode />, title: "Node" },
        { icon: <FaGithub />, title: "GitHub" },
    ]);

    return (
        <section id="skills" className="sectionskills">
            <h1 className="title-s">Skills</h1>
            <div className="skills">
                {skillsData.map((skill, index) => (
                    <div className="skill" key={index}>
                        <div className="skill-icon">{skill.icon}</div>
                        <div className="skill-title">{skill.title}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

