import React from 'react'

const ProjectsInfo = ({ imgUrl, title, description}) => {
  return (
    <div>
      <div 
        className='h-52 md:h-72 rounded-t-xl relative'
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
      >
        <div className='overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden'></div>
      </div>
      <div className='text-primary-color rounded-b-xl bg-[#181818]py-6 px-4'>
        <h5 className='font-xl font-semibold mb-2'>{title}</h5>
        <p className='text-faint-color'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectsInfo;