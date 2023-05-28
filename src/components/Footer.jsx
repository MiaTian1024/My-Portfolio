import React from 'react'
import {motion} from 'framer-motion'
import { LinkedInIcon, TwitterIcon, GithubIcon, PinterestIcon} from './Icons'

const Footer = () => {
  return (
    <div className='fixed w-full bottom-4'>
        <nav className='flex items-center justify-start px-32 flex-wrap '>
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
  )
}

export default Footer