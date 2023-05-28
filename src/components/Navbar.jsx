import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {motion} from 'framer-motion'

import { navLinks } from '../constants'
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

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)


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
        <CustomLink href="/about" title="About" className='mx-4'/>
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/contact" title="Contact" className='ml-4'/>
      </nav>


         <div className='sm:hidden flex flex-1 justify-end items-center'>
           <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
           />

         <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-tertiary" : "text-secondary"} 
                    font-poppins font-bold cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(link.title)}}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

         </div>

         </div>
    

    </div>
  )
}

export default Navbar