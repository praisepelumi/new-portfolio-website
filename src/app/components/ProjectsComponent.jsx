import React from 'react'
import ProjectsInfo from './ProjectsInfo'

const projectsData = [
  {
    id: 1,
    title: "MonDinero",
    description: "MonDinero is a budgeting app that takes advantage of D3 to display your budget and expenses side by side in interactive and easy to read graphs.",
    image: "/images/projectImages/mondinero.png"
  },
  {
    id: 2,
    title: "Kubernét",
    description: "Kubernét is a user-friendly solution for effortlessly visualizing and monitoring your Kubernetes metrics in real-time.",
    image: "/images/projectImages/dashboard.gif"
  },
  {
    id: 3,
    title: "CallStack",
    description: "Created by developers for developers. A community for everyone who ♥'s code. Learn together, grow together.",
    image: "/images/projectImages/callstack.png"
  },
  {
    id: 4,
    title: "Github",
    description: "View more projects on Github",
    image: "/images/PRAISE.png"
  },
]

const ProjectsComponent = () => {
  return (
    <><div><h2>Open Source and Projects</h2></div></>
  )
}

export default ProjectsComponent