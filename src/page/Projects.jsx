import React, {useState} from 'react'
import {Tilt} from 'react-tilt'

import { Layout, TransitionEffect } from '../components'
import { motion } from 'framer-motion'

import { GithubIcon } from '../components/Icons'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { projects } from '../constants'

const ProjectCard = ({index, title, image, image2, tags, description, link, github }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter =() =>{
    setIsHovered(true)
  }
  const handleMouseLeave =() =>{
    setIsHovered(false)
  }

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="py-5 w-[360px] small:w-full"
      >
      <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-pink/60 bg-light p-6 relative rounded-br-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-pink/40 rounded-br-3xl' />
      <a href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
         {isHovered 
          ? <img 
          src={image2} 
          alt={title} 
          className='w-full h-[200px]' />
          : <img 
          src={image} 
          alt={title} 
          className='w-full h-[200px]' />
          }
         
        </motion.div>
      </a>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <a href={link} target="_blank" className='hover:underline text-pink first-letter:underline-offset-2'>
          <h2 className='my-2 w-full text-left text-pink text-3xl font-bold'>{title}</h2>
        </a>
        <div className='w-full h-[40px]'>
        <p className='text-pink/50 font-medium text-md'>{description}</p>
        </div>

        <div className='mt-2 flex flex-wrap gap-2'>
         {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
         ))}

       </div>
        <div className='w-full mt-2 flex items-center justify-between'>  
        <a href={link} target="_blank" className='underline text-pink text-lg font-semibold'>Visit</a>
        <a href={github} target="_blank" className='w-8'> <GithubIcon /></a>
        </div>
      </div>
    </article>
    </Tilt>
    </motion.div>
  )
  
}

const Projects = () => {
  return (
    <>
      <TransitionEffect  />
      <div className='w-full h-auto min-h-screen z-0 bg-light pt-16 px-32 large:px-16 middle:px-12 small:px-8, xs:px-6'>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='max-w-7xl mx-auto relative z-0'
      >
        
         <div>
            <h2 className="text-pink font-black middle:text-[50px] small:text-[40px] xs:text-[30px] text-[60px]">Projects</h2>
          </div>

          <div className='w-full flex'>
            <p className='mt-3 text-pink/60 text-[18px] max-w-5xl leading-[30px]'>
              Following projects showcases my skills and experience through real-world examples of my work.
            </p>
          </div>
      
       
        <div className='py-10 flex flex-wrap gap-8'>
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
          
        </div>
        </motion.section>
      </div>
    </>
  )
}

export default Projects