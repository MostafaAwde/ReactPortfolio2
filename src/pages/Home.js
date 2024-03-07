import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../styles/Home.css"

export const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi My Name Is Mostafa</h2>
        <div className="prompt">
          <p>A full stack developer with a passion for learning and creating</p>
          <FaLinkedin />
          <FaGithub />
          <SiGmail />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ul className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, Bootstrap, SASS, Javascript, ReactJS</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>PHP, Laravel, SQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript, Typescript, Java, PHP, C, C#</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
