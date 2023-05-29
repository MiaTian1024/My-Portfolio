import {React, useState} from 'react'
import { Link, useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'
import { LinkedInIcon, TwitterIcon, GithubIcon, PinterestIcon} from './Icons'

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

const CustomMobileLink = ({href, title, className="", toggle}) => {
  const route = useLocation();

  const handleClick=() =>{
    toggle();
  }

  return(
    <a href={href} className={`${className} my-2 relative group ${route.pathname === href ? 'text-blue' : 'text-pink'}`} onClick={handleClick}>
      {title}

      <span className={`h-[1px] inline-block bg-blue absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${route.pathname === href ? 'w-full' : 'w-0'}`}
      >&nbsp;</span>
    </a>
  )
}


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick =() =>{
    setIsOpen(!isOpen)
  }

  return (
    <header className= "w-full p-24 lg:px-16 md:px-12 sm:px-8 font-medium text-lg bg-primary flex items-center justify-between relative z-10" >

      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-pink block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-pink block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-pink block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
    
      <div className='w-full flex justify-between items-center lg:hidden'>  
        <nav>
        <CustomLink href="/" title="Home" className='mr-4'/>
        <CustomLink href="/skills" title="Skills" className='mx-4'/>
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/contact" title="Contact" className='ml-4'/>
        </nav>

        <nav className='flex items-center justify-start flex-wrap '>
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
      </div>

      {
        isOpen ? 
          <motion.div 
            initial={{scale:0, opacity:0, x:'-50%', y:'-50%'}}
            animate={{scale:1, opacity:1}}
            className='min-w-[70vw] flex flex-col justify-between items-center z-30 
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light/60 rounded-lg backdrop-blur-md py-32'>  
          <nav className='flex items-center flex-col justify-center'>
          <CustomMobileLink href="/" title="Home"  toggle={handleClick} />
          <CustomMobileLink href="/skills" title="Skills" toggle={handleClick}/>
          <CustomMobileLink href="/projects" title="Projects"  toggle={handleClick}/>
          <CustomMobileLink href="/contact" title="Contact" toggle={handleClick}/>
          </nav>

          <nav className='flex items-center justify-start flex-wrap mt-10'>
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
        </motion.div>
        : null
      }  

    </header>
  )
}

export default Navbar