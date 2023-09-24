import React from 'react';
import { CodeBracketIcon,  } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectsInfo = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div>
      <div 
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
      >
        <div className='overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-40 transition-all duration-600 cursor-pointer'>
          <Link href={gitUrl} target="_blank" className="h-14 w-14 relative">
            <CodeBracketIcon className='h-10 w-10 text-faint-color m-2 cursor-pointer hover:text-secondary-color'></CodeBracketIcon>
          </Link>
        </div>
      </div>
      <div className='text-primary-color rounded-b-xl bg-primary-color py-6 px-4'>
        <h5 className='font-xl font-semibold mb-2 mt-4 text-secondary-color '>{title}</h5>
        <p className='text-secondary-color'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectsInfo;