import Link from 'next/link';
import React from 'react'


const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-[#F5F5DC] sm:text-l font-semibold rounded md:p-1 hover:bg-secondary-color hover:text-primary-color transition duration-300">
      {title}
    </Link>
  );
};

export default NavLink;
