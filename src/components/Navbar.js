import React from "react";
import "../styles/navbar.css";
import cv from "../assets/CV-valery.pdf";


function Navbar() {
    return (
        <nav id="navbar">
            <a className='logo' href="/">
                <img src="../images/logo.png" alt="logo"/>
            </a>
            <div className="navbar-right">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#aboutsme">AboutMe</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href={cv}>Resumes</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;