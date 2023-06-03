import React from 'react'
import heroImage from '../../public/hero.png'
import logo from '../assets/logo.png'
import {HireMe, AnimatedText, Layout, TransitionEffect, SphereCanvas} from '../components'


const Home = () => {
  return (
    <div>
      <TransitionEffect  />
        <div className='z-0 absolute left-[25%] w-screen h-screen large:w-screen large:h-screen large:left-0 bottom-[5px] large:bottom-[10%]'>
            <SphereCanvas />
        </div>
        <Layout className=' pt-0 h-screen flex'>
          <div className='flex relative max-w-7xl items-center justify-between gap-10 large:pt-60 '>

            {/* <div className='w-2/5 large:w-1/2 middle:w-3/5 small:w-full small:px-10'>
              
              <img 
                src={logo} 
                alt="heroImage"
                className=''
                >
              </img>
             
            </div> */}

            <div className='w-3/5 flex flex-col items-center self-center large:w-full  large:text-center middle:full middle:text-center'>
              <AnimatedText 
                text="Turing Vision Into Reality With Code And Design."
                className='!text-5xl large:!text-4xl middle:!text-3xl small:!text-2xl !text-left large:!text-center !leading-snug'
              />
              
              <p className='my-4 text-blue/75 font-medium middle:text-sm small:text-xs'>
                As a full-stack developer, I am dedicated to turing ideas into innovative web applications. 
                Explore my latest projects, showcasing my expertise in React.js and web development
              </p>
              
            </div>

          </div>

          
            <HireMe />
          
        </Layout>
    </div>
  )
}

export default Home