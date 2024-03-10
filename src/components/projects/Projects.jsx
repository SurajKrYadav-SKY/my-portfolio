import React from 'react';
import "./Projects.scss";
import { projects } from '../../store/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <div className='items'>
        {projects.map((project,id) => {
          return <ProjectCard key={id} project={project}/>
        })}
      </div>
    </div>
  )
}

export default Projects
