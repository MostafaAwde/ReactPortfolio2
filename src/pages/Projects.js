import React from "react";
import { ProjectItem } from "../component/ProjectItem";
import Proj1 from "../assets/proj1.jpg";
import Proj3 from "../assets/proj3.webp";
import {ProjectList} from "../helpers/ProjectList"
import "../styles/Projects.css"

export const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  );
};
