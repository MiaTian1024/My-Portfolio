import {React, useState} from 'react';
import { motion } from 'framer-motion';
import { TransitionEffect, Layout } from '../components';
import { technologies } from '../constants';

const Skill =({image, x, y,name}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter =() =>{
    setIsHovered(true)
  }
  const handleMouseLeave =() =>{
    setIsHovered(false)
  }

  return (
    <motion.div className='flex items-center justify-center rounded-full
          cursor-pointer absolute bg-pink/40 shadow-dark p-1.5 font-semibold' 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{x:0, y:0}}
          animate={{x:x, y:y}}
          transition={{duration: 1.5}}
          viewport={{once: true}}
        >
          
          {isHovered ? name : image}
         
    </motion.div>
    
  )

}

const Skills = () => {
  return (
    <>
      <TransitionEffect />
      <h2 className='font-bold pt-10 text-pink/80 text-6xl w-full text-center'>Skills</h2>   
      <Layout className='h-screen'>
          
          <div className="w-full h-full p-5 relative flex items-center justify-center rounded-full bg-circularLight">
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 large:p-4 middle:pt-2 shadow-dark cursor-pointer'
              whileHover={{scale:1.05}}
            >
              Web
            </motion.div>

            {technologies.map((technology) => (       
              <Skill 
                image={<img src={technology.icon} alt={technology.name} className='w-12 h-auto' />} 
                name={technology.name}
                x={technology.x} 
                y={technology.y} 
                key={technology.name}
              />
            ))}

          </div>
      </Layout>
    </>
  );
}

export default Skills;
