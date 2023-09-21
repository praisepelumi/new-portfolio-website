import React from 'react'
import Image from 'next/image';

const MainHeader = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-[#004225] mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I&apos;m Praise</h1>
          <p className="text-[#004225] text-lg mb-6 lg:text-xl">I am Software Engineer who is passionate about solving complex problems and building accesible, inclusive, and robust applications.</p>
          <div>
            <li><a href="">Linkedin</a></li>
            <li><a href="">Github</a></li>
            <li><a href="">Resume</a></li>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#004225] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/PRAISE.png"
              alt="praise logo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
          
      </div>
    </section>
    
  )
};

export default MainHeader
