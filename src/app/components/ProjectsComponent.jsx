import React from 'react'
import ProjectsInfo from './ProjectsInfo'

const projectsData = [
  {
    id: 1,
    title: "MonDinero",
    description: "MonDinero is a budgeting app that takes advantage of D3 to display your budget and expenses side by side in interactive and easy to read graphs.",
    image: "/images/projectImages/mondinero.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Kubernét",
    description: "Kubernét is a user-friendly solution for effortlessly visualizing and monitoring your Kubernetes metrics in real-time.",
    image: "/images/projectImages/dashboard.gif",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "CallStack",
    description: "Created by developers for developers. A community for everyone who ♥'s code. Learn together, grow together.",
    image: "/images/projectImages/callstack.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Github",
    description: "View more projects on Github",
    image: "/images/PRAISE.png",
    tag: ["All", "Web"],
  },
]

const ProjectsComponent = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-primary-color mt-4 mb-8 md:mb-12">Open Source and Projects</h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project) => (
          <ProjectsInfo 
            key={project.id} 
            imgUrl={project.image} 
            title={project.title} 
            description={project.description} 
          />
        ))}
      </div>
    </>
  );
}

export default ProjectsComponent