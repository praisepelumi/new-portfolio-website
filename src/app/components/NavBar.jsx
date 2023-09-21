import Link from 'next/link';
import React from 'react'


export const NavBar = () => {
  return (
    <nav>
      <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
        <Link href={"/"} className='text-2xl text-primary-color font-bold'>
        &lt;Praise/&gt;
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul>
            <li>
              <Link href={"#about"} className="block py-2 pl-3 pr-4 text-primary-color sm:text-xl rounded md:p-0 hover:text-primary-color ">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;