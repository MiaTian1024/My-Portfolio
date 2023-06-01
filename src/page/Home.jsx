import React from 'react'
import heroImage from '../../public/hero.png'
import {HireMe, AnimatedText, Layout, TransitionEffect} from '../components'


const Home = () => {
  return (
    <div>
      <TransitionEffect  />
        <Layout className='pt-0 h-screen flex items-center justify-center'>
          <div className='flex max-w-7xl items-center justify-between gap-10 large:flex-col'>

            <div className='w-2/5 large:w-1/2 middle:w-3/5 small:w-full small:px-10'>
              
              <img 
                src={heroImage} 
                alt="heroImage"
                className=''
                >
              </img>
            </div>

            <div className='w-3/5 flex flex-col items-center self-center large:w-full large:text-center middle:full middle:text-center'>
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