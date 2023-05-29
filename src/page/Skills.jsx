import React from 'react';
import { motion } from 'framer-motion';
import { TransitionEffect, Layout } from '../components';

const Skill =({name, x, y}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6
          shadow-dark cursor-pointer absolute '
          whileHover={{scale:1.05}}
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
      <Layout>
          
          <div className="w-full h-full relative flex items-center justify-center rounded-full bg-circularLight">
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 large:p-4 middle:pt-2 shadow-dark cursor-pointer'
              whileHover={{scale:1.05}}
            >
              Web
            </motion.div>

            <Skill name="HTML" x="-25vw" y="2vw" />
            <Skill name="CSS" x="-5vw" y="-10vw" />
            <Skill name="JavaScript" x="20vw" y="-6vw" />
            <Skill name="ReactJS" x="0vw" y="12vw" />
            <Skill name="Python" x="-20vw" y="-15vw" />
            <Skill name="Flask" x="15vw" y="-12vw" />
            <Skill name="NoteJS" x="32vw" y="-5vw" />
            <Skill name="MySQL" x="0vw" y="-20vw" />
            <Skill name="MongoDB" x="-25vw" y="18vw" />
            <Skill name="Figma" x="18vw" y="18vw" />
          </div>
      </Layout>
    </>
  );
}

export default Skills;
