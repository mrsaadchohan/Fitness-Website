import React from 'react'
import {Link as ScrollLink} from 'react-scroll';
const Links = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "class", target: "class", offset: -80 },
  { name: "team", target: "team", offset: 0 },
  { name: "Membership", target: "prices", offset: -40 },
  { name: "testimonial", target: "testimonial", offset: 0 },
  { name: "blog", target: "blog", offset: 0 },
  { name: "contact", target: "contact", offset: 0 },
];
function Mobilenav({containerStyles}:{containerStyles:string}) {
  return (
    <section>
       <nav className={`${containerStyles}`}>
      {Links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            className='cursor-pointer hover:text-red-600 transition-all'
            activeClass="active"
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav> 
    </section>
  )
}

export default Mobilenav
