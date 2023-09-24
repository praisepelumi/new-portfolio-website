import React from 'react'
import ProjectsInfo from './ProjectsInfo'

const projectsData = [
  {
    id: 1,
    title: "MonDinero",
    description: "A budgeting app that utilizes D3 to display your budget and expenses side by side in interactive and easy to read graphs.",
    image: "/images/projectImages/mondinero.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mondinero/MonDinero",
    
  },
  {
    id: 2,
    title: "Kubernét",
    description: "Kubernét is a user-friendly solution for effortlessly visualizing and monitoring your Kubernetes metrics in real-time.",
    image: "/images/projectImages/dashboard.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/oslabs-beta/Kubernet",
  },
  {
    id: 3,
    title: "CallStack",
    description: "Created by developers for developers. A community for everyone who ♥'s code. Learn together, grow together.",
    image: "/images/projectImages/callstack.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tasselled/CallStack",
  },
  {
    id: 4,
    title: "Github",
    description: "View more projects on Github",
    image: "/images/PRAISE.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/praisepelumi",
  },
]

const ProjectsComponent = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold  mt-4 mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-500 to-green-600">Open Source and Projects</h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project) => (
          <ProjectsInfo 
            key={project.id} 
            imgUrl={project.image} 
            title={project.title} 
            description={project.description} 
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsComponent