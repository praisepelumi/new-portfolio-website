import React from 'react'
import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link href={"#about"} className="block py-2 pl-3 pr-4 text-primary-color sm:text-xl rounded md:p-0 hover:text-primary-color ">{title}</Link>
  )
}

export default NavLink;
