import React, { useState, useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import { TransitionEffect} from '../components'
import { slideIn, staggerContainer } from '../utils/motion'

const serverId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID
const publicKey = import.meta.env.VITE_PUBLIC_KEY
const email = import.meta.env.VITE_EMAIL

const Contact = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    meddage: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target

    setForm({...form, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      serverId,
      templateId,
      {
        from_name: form.name,
        to_name: 'Mia',
        from_email: form.email,
        to_email: email,
        message: form.message,
      },
      publicKey
    ).then(() => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) =>{
      setLoading(false)
      console.log(error)
      alert('Something went wrong')
    })
  }

  return (
    <>
      <TransitionEffect  />
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto relative z-0 py-20 px-32 large:px-16 middle:px-12 small:px-8 xs:px-6"
      >
      <div className='flex-col flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-pink/20 px-8 pt-4 rounded-2xl'
        >
          <h3 className="text-pink font-black  large:text-[50px] middle:text-[40px] small:text-[30px] text-[60px]">Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=' mt-4 flex flex-col gap-x-28'
          >
            <label className='flex flex-col'>
              <span className='text-light font-medium mb-4'>Your Name</span>
                <input 
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className='bg-light/30 py-4 mb-4 px-6 placeholder:text-pink/80 text-pink rounded-lg outlined-none border-none font-medium'
                />
            </label>

            <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
              <input 
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-light/30 py-4 mb-4 px-6 placeholder:text-pink/80 text-pink rounded-lg outlined-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows="5" 
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className='bg-light/30 py-4 mb-4 px-6 placeholder:text-pink/80 text-pink rounded-lg outlined-none border-none font-medium'
              />
            </label>

            <button 
            type="submit" 
            className='bg-pink/60 py-3 mb-4 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
            {loading ? 'Sending...' : 'Send'}

            </button>
          </form>
        </motion.div>

      </div>
      </motion.section>
    </>
  )
}

export default Contact