'use client'
import Link from 'next/link'
import React from 'react'
import Socials from './Socials'
import {motion} from 'framer-motion'

function MainText() {
  return (
    <motion.div
    initial={{opacity: 0}}
      animate={{opacity: 1, transition: {
        delay: 2, duration: 0.4, ease: "easeIn"
      }}}
     className="text-center max-w-full xl:text-left order-2 xl:order-none">
    <span>Twitch Streamer / Content Creator</span>
    <h1 className="h1 mb-6 text-wrap">
      Olá <span 
      className="wave"
      >👋</span> eu sou a <br /> <span className="text-accent">Trossarda</span>
    </h1>
    <p className="max-w-[500px] mb-9 text-white/80">
      Streamer e influencer da <Link href={'https://www.r10team.com/'} className="text-accent">R10 Team</Link> na <Link className="text-semibold text-purple-600" href={'https://twitch.tv/trossarda'}>Twitch</Link> de EA FC e variedades, lives segunda, quarta e sexta, às 13h.
    </p>

    {/* socials */}
    <div className="mb-8 xl:mb-0  xl:mb flex flex-col xl:flex-row items-center gap-8">
      <Socials containerStyles='flex gap-2 md:gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'/>
    </div>

  </motion.div>
  )
}

export default MainText