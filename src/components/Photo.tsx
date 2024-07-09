'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import trossarda from '../../public/assets/trossarda.png'

export default function Photo() {
  return (
    <div className='h-full w-full relative flex items-center justify-center'>
      {/* image */}
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {
        delay: 2, duration: 0.4, ease: "easeIn"
      }}}
      className='flex flex-row items-center justify-center absolute'
      >
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {
          delay: 2.4, duration: 0.4, ease: "easeInOut"
        }}}
        className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten flex justify-center absolute'
        >
          <Image 
          src={trossarda} 
          alt='trossarda' 
          priority 
          quality={100} 
          
          className='object-contain'
          fill
          />


        </motion.div>
      </motion.div>

      {/* circle */}
      <motion.svg
        className='w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]'
        fill={'transparent'}
        viewBox='0 0 506 506'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.circle
          cx='253' 
          cy='253' 
          r='250' 
          stroke='#ec9320' 
          strokeWidth='4' 
          strokeLinecap={'round'} 
          strokeLinejoin={'round'} 
          initial={{strokeDasharray: '24 10 0 0'}}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360 ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >

        </motion.circle>
      </motion.svg>
    </div>
  )
}