import React from 'react'

import { Layout, TransitionEffect } from '../components'

import {TypingText} from '../components/CustomTexts'
import heroImage from '../../public/hero.png'
import { GithubIcon } from '../components/Icons'

const Project = ({type, title, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative rounded-br-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
      <a href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
      <img src={img} alt={title} className='w-full h-auto' />
      </a>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-pink font-medium text-xl'>{type}</span>
        <a href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </a>
        <div className='w-full mt-2 flex items-center justify-between'>  
        <a href={link} target="_blank" className='underline text-lg font-semibold'>Visit</a>
        <a href={github} target="_blank" className='w-8'> <GithubIcon /></a>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <div className='w-full mb-16 flex flex-col items-center justify-center'>
      <TransitionEffect  />
      <Layout>
        <TypingText 
          title="Following projects showcases my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos in it. 
          It reflects my ability to sove complex problems, work with different technologies, and manage projets effectively."
          className= "mt-3"
        />
        <div className='grid grid-cols-12 gap-24'>
          <div className='col-span-6'>
            <Project 
              title="Crypty Screen Application"
              img={heroImage}
              link="/"
              github="/"
              type="project"
            />
          </div>
          <div className='col-span-6'>
            Project2
          </div>
        </div>
    
      </Layout>
    </div>
  )
}

export default Projects