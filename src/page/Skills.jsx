import {React, useState} from 'react';
import { motion } from 'framer-motion';
import { TransitionEffect, Layout , SphereCanvas} from '../components';
import { technologies } from '../constants';
import { web } from '../assets';

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
          cursor-pointer absolute bg-light/80 p-2 border border-solid border-pink/60 font-semibold' 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{x:0, y:0}}
          animate={{x:x, y:y}}
          transition={{duration: 1.5}}
          viewport={{once: true}}
        >
          {/* <div className='absolute top-2 -right-2 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-pink/40 rounded-br-3xl' /> */}
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
          
          <div className="w-full h-full p-5 relative text-blue font-bold flex items-center justify-center rounded-full bg-circularLight">
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-light/80 p-2 border border-solid border-pink/60 cursor-pointer'
              whileHover={{scale:1.05}}
            >
              {<img src={web} alt="web" className='w-12 h-12'/>}
            </motion.div>

            {technologies.map((technology) => (       
              <Skill 
                image={<img src={technology.icon} alt={technology.name} className='w-12 h-12' />} 
                name={technology.name}
                x={technology.x} 
                y={technology.y} 
                key={technology.name}
              />
            ))}

          </div>
      </Layout>
      <div className='h-screen w-auto'>
      <SphereCanvas />
      </div>
    </>
  );
}

export default Skills;
