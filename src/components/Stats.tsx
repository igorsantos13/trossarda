'use client'

import React from 'react'
import CountUp from 'react-countup'

export default function Stats() {

  const stats = [
    {
      num: 5900,
      text: 'twitch followers'
    },
    {
      num: 7500,
      text: 'instagram followers'
    },
    {
      num: 3800,
      text: 'x/twitter followers'
    },
    {
      num: 1300,
      text: 'youtube subscribers'
    },
  ]
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className="container mx-auto">
        <div className='flex flex-wrap gap-6 max-w-[80xw] mx-auto xl:max-w-none'>
          {stats.map((item, index) => (
            <div
            className='flex-1 flex gap-4 items-center justify-center xl:justify-start'
             key={index}>
              <CountUp 
                end={item.num}
                duration={3}
                delay={2}
                className='text-4xl xl:text-6xl font-extrabold'

              />
              +
              <p className={`${item.text.length < 15 ? 'max-w-[100px]': 'max-w-[150px]'} leading-snug text-white/80`}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
