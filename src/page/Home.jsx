import React from 'react'
import heroImage from '../../public/hero.png'
import {HireMe, AnimatedText, Layout, TransitionEffect} from '../components'


const Home = () => {
  return (
    <div>
      <TransitionEffect  />
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>

            <div className='w-1/2 lg:hidden md:inline-block md:w-full'>
              
              <img 
                src={heroImage} 
                alt="heroImage"
                className='w-full h-auto pr-20 '
                >
              </img>
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText 
                text="Turing Vision Into Reality With Code And Design."
                className='xl:!text-5xl sm:!text-3xl lg:!text-5xl !text-left lg:!text-center !leading-snug'
              />
              
              <p className='my-4 text-blue/75 font-medium md:text-sm sm:text-xs'>
                As a skilled full-stack developer, I am dedicated to turing ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development
              </p>
              
            </div>

          </div>

          
            <HireMe />
          
        </Layout>
    </div>
  )
}

export default Home