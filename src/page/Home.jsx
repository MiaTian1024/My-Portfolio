import React from 'react'
import { motion } from 'framer-motion'
import heroImage from '../../public/hero.png'
import logo from '../assets/logo.png'
import { slideIn, staggerContainer } from '../utils/motion'
import {HireMe, AnimatedText, Layout, TransitionEffect, SphereCanvas} from '../components'


const Home = () => {
  return (
    <div>
      <TransitionEffect  />
          <div className='z-0 absolute left-[12%] w-screen h-screen large:left-0 '>
            <SphereCanvas />
          </div>
        {/* <div className='z-0 absolute left-[25%] w-screen h-screen large:w-screen large:h-screen large:left-0 bottom-[5px] large:bottom-[10%]'>
            <SphereCanvas />
        </div> */}
        <div className=' pt-0 px-32 large:px-16 middle:px-12 small:px-8 xs:px-6 h-screen flex'>
          <div className='flex relative max-w-7xl items-center  justify-between'>

            <div className='w-3/5 flex max-w-7xl flex-col justify-end items-center large:w-full large:text-center middle:full middle:text-center'>
              <AnimatedText 
                text="Turing Vision Into Reality With Code And Design."
                className='!text-5xl large:!text-4xl middle:!text-3xl small:!text-2xl !text-left large:!text-center !leading-snug'
              />
              
              <p className='my-4 text-dark/75 font-medium middle:text-sm small:text-xs'>
                As a full-stack developer, I am dedicated to turing ideas into innovative web applications. 
                Explore my latest projects, showcasing my expertise in web development
              </p>
              
            </div>

          </div>

          
            {/* <HireMe /> */}
          
        </div>
    </div>
  )
}

export default Home