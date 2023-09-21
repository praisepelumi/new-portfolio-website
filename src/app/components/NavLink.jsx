import Link from 'next/link';
import React from 'react'


const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-[#F5F5DC] sm:text-l font-bold rounded md:p-0 hover:text-xl ">
      {title}
    </Link>
  );
};

export default NavLink;
