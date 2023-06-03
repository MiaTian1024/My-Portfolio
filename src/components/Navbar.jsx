import {React, useState} from 'react'
import { Link, useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'
import { LinkedInIcon, TwitterIcon, GithubIcon, FacebookIcon} from './Icons'

const CustomLink = ({href, title, className=""}) => {
  const route = useLocation();

  return(
    <Link to={href} className={`${className} relative hover:text-blue group ${route.pathname === href ? 'text-blue' : 'text-pink'}`}>
      {title}

      <span className={`h-[1px] inline-block bg-blue absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${route.pathname === href ? 'w-full' : 'w-0'}`}
      >&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
  const route = useLocation();

  const handleClick=() =>{
    toggle();
  }

  return(
    <Link to={href} className={`${className} my-2 relative group ${route.pathname === href ? 'text-blue' : 'text-pink'}`} onClick={handleClick}>
      {title}

      <span className={`h-[1px] inline-block bg-blue absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${route.pathname === href ? 'w-full' : 'w-0'}`}
      >&nbsp;</span>
    </Link>
  )
}


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick =() =>{
    setIsOpen(!isOpen)
  }

  return (
    <header className= "w-full pt-20 large:pt-12 px-32 large:px-16 middle:px-12 small:px-8 xs:px-6 font-medium text-lg bg-primary flex items-center relative z-10" >

      <button className='flex-col justify-center items-center hidden large:flex' onClick={handleClick}>
        <span className={`bg-pink block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-pink block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-pink block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
    
      <div className=' w-full flex justify-between items-center large:hidden'>  
        <nav>
        <CustomLink href="/" title="Home" className='mr-4'/>
        <CustomLink href="/skills" title="Skills" className='mx-4'/>
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/contact" title="Contact" className='ml-4'/>
        </nav>

        <nav className='flex items-center justify-start flex-wrap '>
              <motion.a href="https://www.linkedin.com/in/mia-tian-893423269" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mr-3'
              >
                  <LinkedInIcon />
              </motion.a>
              <motion.a href="https://github.com/MiaTian1024" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mx-3'
              >
                  <GithubIcon />
              </motion.a>
              <motion.a href="https://www.facebook.com/tiya.tian.376" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mx-3'
              >
                  <FacebookIcon />
              </motion.a>           
              <motion.a href="https://twitter.com/MiaTian1024" target={"_blank"}
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
              <motion.a href="https://www.linkedin.com/in/mia-tian-893423269" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mr-3'
              >
                  <LinkedInIcon />
              </motion.a>
              <motion.a href="https://github.com/MiaTian1024" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mx-3'
              >
                  <GithubIcon />
              </motion.a>
              <motion.a href="https://www.facebook.com/tiya.tian.376" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mx-3'
              >
                  <FacebookIcon />
              </motion.a> 
              <motion.a href="https://twitter.com/MiaTian1024" target={"_blank"}
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