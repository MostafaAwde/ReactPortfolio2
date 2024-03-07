import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/mostafa-awde-a02174259/" target="_blank">
          <FaLinkedin />
        </a>
        <a>
          <FaTwitter />
        </a>
        <a>
          <FaGithub />
        </a>
        <a href={`mailto:82030084@students.liu.edu.lb`} target="_blank">
          <SiGmail />
        </a>
      </div>
      <p>&copy; 2023 Mostafa Awde</p>
    </div>
  );
};
