import React from 'react'
import heroImage from '../../public/hero.png'
import AnimatedText from '../components/AnimatedText'


const Home = () => {
  return (
    <div className='py-20'>
      <div className='flex sm:flex-row flex-col items-center justify-between w-full h-full z-0 sm:px-32 px-16'>

        <div className='sm:w-3/5 w-full flex flex-col items-center self-center'>
          <AnimatedText 
            text="Turing Vision Into Reality With Code And Design."
            className='!text-5xl !text-3xl !text-left !leading-snug'
          />
          
          <p className='my-4 text-blue/75 font-medium'>
            As a skilled full-stack developer, I am dedicated to turing ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in React.js and web development
          </p>
          
        </div>
        
        <div className='sm:w-2/5 w-full'>
         
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

export default Home