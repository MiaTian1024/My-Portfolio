import React from 'react'
import heroImage from '../../public/hero.jpg'
import AnimatedText from './AnimatedText'

const Hero = () => {
  return (
    <div className='flex items-center text-dark w-full min-h-screen'>
      <div className='flex items-center justify-between w-full h-full inline-block z-0 p-32 gap-10'>

        <div className='w-1/2'>
          <img src={heroImage} alt="heroImage"/>
        </div>

        <div className='w-1/2 flex flex-col items-center self-center'>
          <AnimatedText 
            text="Turing Vision Into Reality With Code And Design."
            className='!text-6xl !text-left'
          />
          
          <p className='my-4 text-base font-medium'>
            As a skilled full-stack developer, I am dedicated to turing ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in React.js and web development
          </p>
          
        </div>
        

      </div>
    </div>
  )
}

export default Hero