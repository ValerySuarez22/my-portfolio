import React from "react";
import "../styles/aboutsme.css";

function Aboutsme() {
  return (
    <section id="aboutsme" className="sectionAboutsme">
      <div className="about-container">
        <img src="../images/ds.png" alt="imagen" className="about-image" />
        <div className="wrapper">
          <h1 className="title-abuot">About Me</h1>
          <p className="about-text">
            As a developer, my profile focuses on the creation of elements
            customized computer systems, working with current technologies and
            modern tools, in order to provide innovative solutions to my
            clients. I am passionate about designing and creating applications
            that are efficient, scalable and easy to maintain. Have experience
            developing web, mobile and web applications desktop using different
            programming languages and frameworks of work. In addition, I have
            teamwork skills, communication and planning, which allows me to
            collaborate with others developers and manage projects effectively.
          </p>
          <a class="button" href="#work">
            ¡ work !
          </a>
        </div>
      </div>
    </section>
  );
}

export default Aboutsme;
