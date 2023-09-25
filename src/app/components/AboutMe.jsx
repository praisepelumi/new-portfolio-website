"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import { LinkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

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
        <li>Containers</li>
      </ul>
    ),
  },
  {
    title: "Publications",
    id: "publications",
    content: (
      <ul className='list-disc pl-2'>
        <li className="flex items-center">
          <a className='hover:text-faint-color' href="https://medium.com/@teamkubernet/introducing-kubern%C3%A9t-326cf56b9744" target="_blank">Introdcuing kubernét<LinkIcon className="h-5 w-5" /></a>
        </li>
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
        <Image src="/images/green-me.png" alt="wanna get to know me?" width={500} height={500} className="rounded-md"/>
        <div className='mt-3 md:mt-0 text-left flex flex-col h-full'>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-400 to-green-300">About Me</h2>
          <p className='text-base md:text-lg'>
            A couple of years ago, I got introduced to coding by my older sister, and since then I never stopped coding.
            Today, I proudly identify as a software engineer, wholeheartedly committed to crafting elegant solutions to complex problems. 
            With each line of code, I bring innovative applications to life, and I transform ideas into functional, impactful software. 
          </p>
          <br />
          <p className='text-base md:text-lg'>
            When I&apos;m not coding, you can find me cooking, playing the piano, strumming the guitar, or dressed impeccably at an event.
          </p>

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