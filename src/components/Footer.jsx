import React from 'react'
import {motion} from 'framer-motion'
import { LinkedInIcon, TwitterIcon, GithubIcon, PinterestIcon} from './Icons'

const Footer = () => {
  return (
    <footer className='px-32 w-full border-t-2 border-solid border-darkBlue font-medium text-lg text-blue'>
        <div className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                Build With <span className='text-pink text-2xl px-1'>&#9825;</span>
                by&nbsp;<a href="https://devdreaming.com" className='underline underline-offset-2'>Mia TIAN</a>
            </div>
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
    </footer>
  )
}

export default Footer