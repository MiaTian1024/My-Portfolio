import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {motion} from 'framer-motion'

import { logo, menu, close } from '../assets'

const CustomLink = ({href, title, className=""}) => {
  const route = useLocation();

  return(
    <a href={href} className={`${className} relative group ${route.pathname === href ? 'text-blue' : 'text-pink'}`}>
      {title}

      <span className={`h-[1px] inline-block bg-blue absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${route.pathname === href ? 'w-full' : 'w-0'}`}
      >&nbsp;</span>
    </a>
  )
}
const Navbar = () => {

  return (
    <div className= "w-full sm:px-32 px-16 py-8 mt-8 font-medium flex items-center justify-end" >
      {/* <nav>
            <Link
              to='/'
              className='flex items-center justify-center '
              onClick={() => {
                setActive('')
                window.scrollTo(0, 0)
              }}
            >
              <img src={logo} alt="logo" className='w-10 h-10 object-contain' />
            </Link>
      </nav> */}
      
      <nav>  
        <CustomLink href="/" title="Home" className='mr-4'/>
        <CustomLink href="/skills" title="Skills" className='mx-4'/>
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/contact" title="Contact" className='ml-4'/>
      </nav>

    </div>
  )
}

export default Navbar