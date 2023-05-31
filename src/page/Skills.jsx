import React from 'react';
import { motion } from 'framer-motion';
import { TransitionEffect, Layout } from '../components';
import { BallCanvas } from '../components/canvas';
import { technologies } from '../constants';

const Skill =({name, x, y}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full
          cursor-pointer absolute '
          initial={{x:0, y:0}}
          animate={{x:x, y:y}}
          transition={{duration: 1.5}}
          viewport={{once: true}}

        >
          {name}
        </motion.div>
  )

}

const Skills = () => {
  return (
    <>
      <TransitionEffect />
      <h2 className='font-bold pt-5 text-6xl w-full text-center'>Skills</h2>   
      <Layout className='h-screen'>
          
          <div className="w-full h-full relative flex items-center justify-center rounded-full bg-circularLight">
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 large:p-4 middle:pt-2 shadow-dark cursor-pointer'
              whileHover={{scale:1.05}}
            >
              Web
            </motion.div>

            {technologies.map((technology) => (
            
              <Skill 
                name={<BallCanvas icon={technology.icon} />} 
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
