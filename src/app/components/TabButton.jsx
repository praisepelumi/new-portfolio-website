import React from 'react'

const TabButton = ( { active, selectTab, children}) => {
const buttonClasses = active ? 'text-primary-color border-b border-primary-color 500' : 'text-[#339867]';
  
return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-primary-color ${buttonClasses}`} >
        {children}
      </p>
      
    </button>
  )
}

export default TabButton