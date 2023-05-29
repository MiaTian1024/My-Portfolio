import React from 'react'
import {motion} from 'framer-motion'
import { LinkedInIcon, TwitterIcon, GithubIcon, PinterestIcon} from './Icons'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='bg-primary px-32 large:px-24 middle:px-12 small:px-8 w-full border-t-2 border-solid border-darkBlue font-medium text-lg text-blue small:text-base z-10'>
        <div className='py-6 flex items-center justify-between  large:text-base small:text-sm'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                Build With <span className='text-pink text-2xl px-1'>&#9825;</span>
                by&nbsp;<a href="https://devdreaming.com" className='underline underline-offset-2'>Mia TIAN</a>
            </div>          
        </div>
    </footer>
  )
}

export default Footer