import React from 'react'

const ProjectsComponent = ({ imgUrl, title, description}) => {
  return (
    <div>
      <div className='h-52 md:h-72' style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}></div>
      <div className='text-primary-color'>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectsComponent;