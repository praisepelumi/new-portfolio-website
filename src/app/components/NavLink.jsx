import Link from 'next/link';
import React from 'react'


const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-[#F5F5DC] sm:text-l font-semibold rounded md:p-0 hover:bg-secondary-color hover:text-primary-color hover:p-1">
      {title}
    </Link>
  );
};

export default NavLink;
