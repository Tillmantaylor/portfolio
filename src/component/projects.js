import React, { useEffect } from 'react';
import Project from './project';
import './projects.css';
import todoList from '../assets/todoList.PNG';
import sass from '../assets/Sass.PNG';
import metrics from '../assets/metrics.PNG';
import AOS from 'aos';
import 'aos/dist/aos.css';

const _projects = [
    {
        imagePath: todoList,
        alt: "todoList",
        projectTitle: "To-do List",
        projectDescription: "A basic To-Do List using sass and vanilla javascript. You are able to add and remove items.",
        link: "https://github.com/Tillmantaylor/ToDoListJS"
    },
    {
        imagePath: sass,
        alt: "Sass built page",
        projectTitle: "Basic website with Sass",
        projectDescription: "A basic html website with different pages. The css for the site was built using sass.",
        link: "https://github.com/Tillmantaylor/BasicSass"
    },
    {
        imagePath: metrics,
        alt: "Metric page",
        projectTitle: "Petstore Metric App",
        projectDescription: "A web app that is built in .net that takes data from a petstore and returns different metrics. There is a login along with role based authorization.",
        link: "https://github.com/Tillmantaylor/petStoreWebAPI"
    }
];

const Projects = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='container-projects-main' data-aos="slide-right" data-aos-duration="2000" data-aos-anchor-placement="top-center">
        <span className="project-title">Projects</span>
        <div id='projects' className='container-projects'>
            {_projects.map((project) => <Project key={project.link} project={project}/>)}
        </div>
    </div>
  )
}

export default Projects