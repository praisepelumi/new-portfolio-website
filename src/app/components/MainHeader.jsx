"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

// import icons 
import  GithubIcon from '../../../public/github-1.svg';
import  EmailIcon from '../../../public/gmail-4.svg';
import  LinkedinIcon from '../../../public/linkedin-3.svg';
import  ResumeIcon from '../../../public/cv-1.svg';

import Link from 'next/link';


const MainHeader = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-primary-color mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-green-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br> 
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Praise',
                1300, // wait 1s before replacing "Praise" with "A software Engineer"
                'A Software Engineer',
                1000,
                'A Designer',
                1000,
                'A Creator',
                1000,
               
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#004225]  text-base sm:text-lg mb-6 lg:text-xl">I am a Software Engineer who is passionate about solving complex problems and building accesible, inclusive, and robust applications.</p>
          
          <div className='socials grid place-content-center md:grid-cols-4 gap-8 md:gap-8'>
              <Link  href="https://github.com/praisepelumi" target="_blank">
                <Image className="hover:bg-gradient-to-br from-green-700 to-teal-400 transition duration-300 text-[#004225] rounded-full" width={50} height={40} alt="Github Icon" src={GithubIcon}/>
              </Link>
              <Link href="https://www.linkedin.com/in/praiseemmanuel/" target="_blank">
                <Image className="hover:bg-gradient-to-br from-green-700 to-teal-400 transition duration-300 text-[#004225] rounded-full" width={50} height={40} alt="Linkedin Icon" src={LinkedinIcon}/>
              </Link>
              <Link href="/Praise_Emmanuel_Resume.pdf" target="_blank">
                <Image className="hover:bg-gradient-to-br from-green-700 to-teal-400 transition duration-300 text-[#004225] rounded-full" width={50} height={40} alt="Resume Icon" src={ResumeIcon}/>
              </Link>
              <Link label="Email" href='https://mail.google.com/mail/?view=cm&fs=1&to=praisepemmanuel@gmail.com' target="_blank">
                <Image className="hover:bg-gradient-to-br from-green-700 to-teal-400 transition duration-300 text-[#004225] rounded-full" width={50} height={40} alt="Email Icon" src={EmailIcon}/>
              </Link>
          </div>

          {/* <div>
            <a className="inline-block px-6 py-3 mr-4 rounded-full w-full sm:w-fit hover:bg-gradient-to-br from-green-500 to-teal-200 transition duration-300 text-[#004225]" href="https://www.linkedin.com/in/praiseemmanuel/" target="_blank">
              Linkedin
            </a>
            <a className="px-6 py-3 mr-4 rounded-full w-full sm:w-fit  hover:bg-gradient-to-br from-green-500 to-teal-200 text-[#004225] mt-3" href="https://github.com/praisepelumi" target="_blank">
              Github
            </a>
            <a className="px-6 py-3 rounded-full w-full sm:w-fit hover:bg-gradient-to-br from-green-500 to-teal-200 text-[#004225] mt-3" href="" target="_blank">
              Resume
            </a>
            <a className="px-6 py-3 rounded-full w-full sm:w-fit hover:bg-gradient-to-br from-green-500 to-teal-200 text-[#004225] mt-3" href="" target="_blank">
              Email
            </a>
          </div>*/}
        </div> 
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#004225] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/PRAISE.png"
              alt="praise logo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
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
