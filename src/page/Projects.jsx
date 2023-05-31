import React from 'react'

import { Layout, TransitionEffect } from '../components'

import {TypingText} from '../components/CustomTexts'

const Projects = () => {
  return (
    <div>
      <TransitionEffect  />
      <Layout>
        <TypingText 
          title="Following projects showcases my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos in it. 
          It reflects my ability to sove complex problems, work with different technologies, and manage projets effectively."
          className= "mt-3"
        />
    
      </Layout>
    </div>
  )
}

export default Projects