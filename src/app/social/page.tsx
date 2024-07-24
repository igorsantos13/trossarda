'use client'

import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

export default function Social() {
  const numbers = [
    {
      value: '200,5k+ ▶️',
      title: 'Views no tiktok',
      description: '25+ vídeos publicados'
    },
    {
      value: '110,5k 📈',
      title: 'Youtube total views',
      description: 'Vods e cortes das lives'
    },
    {
      value: '30k+ 📱',
      title: 'Curtidas no TikTok',
      description: '4k followers'
    },
    {
      value: '2,2k 📸',
      title: 'Média view nos stories',
      description: 'chutei o numeroKKKKK'
    },
  ]

  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px] '
        >
          {numbers.map((socials, index) => (
            <div key={index}
              className='flex-1 flex flex-col justify-center gap-6 group'
            >
              {/* top */}
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent groupo-hover:text-outline-hover transition-all duration-500'>
                  {socials.value}
                </div>
                
              </div>
              {/* title */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{socials.title}</h2>
              {/* description */}
              <p className='text-white/80'>{socials.description}</p>

              {/* border */}
              <div className='border-b border-white/20 w-full'></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
