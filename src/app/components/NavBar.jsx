"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import NavLink from './NavLink';
import OverlayMenu from './OverlayMenu';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [ 
  {
  title: "About",
  path: "#about",
  },
  {
  title: "Resume",
  path: "#about",
  },
  {
  title: "Projects",
  path: "#projects",
  },
  {
  title: "Contact",
  path: "#contact",
  },
];

export const NavBar = () => {
  const [navBarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-primary-color bg-opacity-100'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-6 py-2'>
        <Link href={"/"} className='text-xl md:text-2xl text-[#F5F5DC] font-bold'>
        &lt;Praise/&gt;
        </Link>
        <div className='mobile-menu block md:hidden'>
          {
            !navBarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-secondary-color text-secondary-color hover:text-primary-color hover:border-primary-color hover:bg-secondary-color">
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-secondary-color text-secondary-color hover:text-primary-color hover:border-primary-color hover:bg-secondary-color">
                <XMarkIcon className="h-5 w-5" />
              </button>
              
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
           {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title}/>
            </li>
          ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <OverlayMenu links={navLinks} /> : null }
    </nav>
  )
}

export default NavBar;