import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { LinkedInIcon, TwitterIcon, GithubIcon, PinterestIcon} from './Icons'

const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)


  return (
    <header className= "w-full px-32 py-8 mt-8 font-medium flex items-center justify-between" >
      <nav>  
         <ul className='list-none hidden sm:flex flex-row gap-6'>
           {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-dark" : "text-secondary"} relative group
                hover:text-dark font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
            >
              <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${active === link.title ? "w-full" : "w-0" }`}
              >&nbsp;</span>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
                
           ))}
         </ul>
         </nav>

         <nav className='absolute left-[50%] mt-2 top-2 translate-x-[-50%]'>
            <Link
              to='/'
              className='flex items-center justify-center '
              onClick={() => {
                setActive('')
                window.scrollTo(0, 0)
              }}
            >
              <img src={logo} alt="logo" className='w-14 h-14 object-contain' />
            </Link>
         </nav>


         <nav className='flex items-center justify-center flex-wrap '>
           <motion.a href="https://linkedin.com" target={"_blank"}
             whileHover={{y:-2}}
             whileTap={{scale:0.9}}
             className='w-6 mr-3'
           >
              <LinkedInIcon />
           </motion.a>
           <motion.a href="https://linkedin.com" target={"_blank"}
             whileHover={{y:-2}}
             whileTap={{scale:0.9}}
             className='w-6 mx-3'
           >
              <GithubIcon />
           </motion.a>
           <motion.a href="https://linkedin.com" target={"_blank"}
             whileHover={{y:-2}}
             whileTap={{scale:0.9}}
             className='w-6 mx-3'
           >
              <PinterestIcon />
           </motion.a>
           <motion.a href="https://linkedin.com" target={"_blank"}
             whileHover={{y:-2}}
             whileTap={{scale:0.9}}
             className='w-6 ml-3'
           >
              <TwitterIcon />
           </motion.a>

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
    

    </header>
  )
}

export default Navbar