"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>TypeScript</li>
        <li>JavaScrpt</li>
        <li>React</li>
        <li>Redux</li>
        <li>NoSQL</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Talks",
    id: "talks",
    content: (
      <ul className='list-disc pl-2'>
        <li>Test Driven Development</li>
        <li>Containerst</li>
      </ul>
    ),
  },
  {
    title: "Publications",
    id: "publications",
    content: (
      <ul className='list-disc pl-2'>
        <li>Medium Script link</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }

  return (
    <section className='text-primary-color' id="about">
      <div className='md: grid md:grid-cols-2 gap-8 items-centerpy-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/green-me.png" alt="wanna get to know me?" width={500} height={500}/>
        <div className='mt-3 md:mt-0 text-left flex flex-col h-full'>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-400 to-green-300">About Me</h2>
          <p className='text-base md:text-lg'>When I&apos;m not coding, you can find me cooking, playing the piano, or playing the guitar.
          <br />
          I am proficient in TypeScript, JavaScript ES6+, React.js, Node.js, Redux, Express.js, SQL, HTML5, SCSS, CSS, NoSQL (MongoDB), Mongoose, React Testing Library, Jest, Supertest,
          Webpack, bcrypt, Kubernetes, Docker, RESTful APIs, and Github</p>

          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "} Skills{" "}</TabButton>
            <TabButton selectTab={() => handleTabChange("talks")} active={tab === "talks"}>{" "} Talks{" "}</TabButton>
            <TabButton selectTab={() => handleTabChange("publications")} active={tab === "publications"}>{" "} Publications{" "}</TabButton>
          </div>
          <div className="mt-8">
            
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe