'use client'

import React from 'react'
import CountUp from 'react-countup'

export default function Stats() {

  const stats = [
    {
      num: 1,
      text: 'twitch followers'
    },
    {
      num: 10,
      text: 'instagram followers'
    },
    {
      num: 100,
      text: 'x/twitter followers'
    },
    {
      num: 1000,
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
                duration={5}
                delay={2}
                className='text-4xl xl:text-6xl font-extrabold'

              />
              <p className={`${item.text.length < 15 ? 'max-w-[100px]': 'max-w-[150px]'} leading-snug text-white/80`}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
