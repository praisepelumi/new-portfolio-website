import React from 'react';
import NavLink from './NavLink';

const OverlayMenu = ({links}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      <li>
        {links.map((link, index) => (<NavLink key={index} href={link.path} title={link.title} />))}
      </li>
     
    </ul>
  )
}

export default OverlayMenu;
