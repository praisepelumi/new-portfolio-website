import React from 'react'

const MainHeader = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-[#004225] mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I&apos;m Praise</h1>
          <p className="text-[#004225] text-lg lg:text-xl">I am Software Engineer who is passionate about solving complex problems and building accesible, inclusive, and robust applications.</p>
        </div>
        <div className="col-span-5"></div>
      </div>
    </section>
    
  )
};

export default MainHeader
