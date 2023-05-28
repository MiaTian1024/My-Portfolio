import React from 'react'
import heroImage from '../../public/hero.png'
import AnimatedText from './AnimatedText'


const Hero = () => {
  return (
    <div className='flex items-center text-dark py-20'>
      <div className='flex items-center justify-between w-full h-full z-0 px-32 gap-10'>

        <div className='w-3/5 flex flex-col items-center self-center'>
          <AnimatedText 
            text="Turing Vision Into Reality With Code And Design."
            className='!text-5xl !text-left !leading-snug'
          />
          
          <p className='my-4 text-base font-medium'>
            As a skilled full-stack developer, I am dedicated to turing ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in React.js and web development
          </p>
          
        </div>
        
        <div className='w-2/5'>
         
           <img 
             src={heroImage} 
             alt="heroImage"
            >
           </img>
        </div>

      </div>
    </div>
  )
}

export default Hero