'use client'
import React, { ReactNode } from 'react'
import {motion} from 'framer-motion'

interface ContactContainerProps {
  children: React.ReactNode
}

function ContactContainer({children} : ContactContainerProps) {

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {
        delay: 2, duration: 0.4, ease: "easeIn"
      }}}
    >
      {children}
    </motion.div>
  )
}

export default ContactContainer