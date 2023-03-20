import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../styles/work.css";

function Work() {
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/apiprojects/list")
            .then((response) => response.json())
            .then((repo) => setRepo(repo))
            .catch((error) => console.error(error));
    }, []);

    return (
        <section id="work" className="sectionWork">
            <h1 className="title-w">Work</h1>
            <div className="card-container">
                {repo.map((int) => {          
                    return (
                        <div className="card" key={int.id}>
                            <img src={int.images} alt="" className="img-projects"/>
                            <h2 className="card-title">{int.name}</h2>
                            <p className="card-text">{int.description}</p>
                            <a href={int.stacks} className="card-button" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    );
                })}
            </div>
        </section>            
    );
}

export default Work;
