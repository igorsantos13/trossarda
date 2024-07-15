'use client'

import Image from 'next/image'
import React from 'react'
import Banner from '../../../public/assets/ytbanner.jpg'
import r10 from '../../../public/assets/r10.jpg'
import { Tilt } from 'react-tilt'

export default function Work() {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    // "cubic-bezier(.03,.98,.52,.99)"
  }
  
  return (
    <div className='overflow-hidden w-full h-full flex flex-col gap-4 items-center justify-center px-6 '>
      <h2 className='text-3xl text-center font-semibold text-zinc-200'>Com quem já trabalhei?</h2>
      <div className='mt-5 flex w-full h-full flex-col gap-4 md:flex-row justify-evenly'>
        <Tilt options={defaultOptions} >
          <div className='shadow-xl max-w-1/2 rounded-lg p-2 bg-gradient-to-br from-zinc-800 to-slate-900 space-y-4 w-full'>
            <Image className='rounded-md w-[1500px] h-[200px]' objectFit='fit' src={Banner} alt='Twitch Partner'/>
            <h2 className='text-2xl text-zinc-300'>TWITCH PARTNER</h2>
            <p className='text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda repellendus voluptates minima sequi odit impedit necessitatibus, modi aut libero porro ex, atque eum ullam tenetur. Sint ex tempora ipsam.</p>
          </div>

        </Tilt>
        <Tilt options={defaultOptions} >
          <div className='shadow-xl max-w-1/2 rounded-lg p-2 bg-gradient-to-br from-zinc-800 to-slate-900 space-y-4 w-full'>
            <Image className='rounded-md' src={r10} alt='R10 Team'/>
            <h2 className='text-2xl text-zinc-300'>R10 TEAM MEMBER</h2>
            <p className='text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda repellendus voluptates minima sequi odit impedit necessitatibus, modi aut libero porro ex, atque eum ullam tenetur. Sint ex tempora ipsam.</p>
          </div>

        </Tilt>
      </div>

      <div className='flex-1 flex items-center justify-center pb-4'>
        <div className='flex flex-col items-center justify-center shadow-xl max-w-1/2 rounded-lg p-2 bg-gradient-to-br from-zinc-800 to-slate-900 space-y-4 w-full'>
          <h2 className='text-2xl text-zinc-300'>Trabalhos anteriores</h2>
          <p className='text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda repellendus voluptates minima sequi odit impedit necessitatibus, modi aut libero porro ex, atque eum ullam tenetur. Sint ex tempora ipsam.</p>
          <div className='w-full h-full  gap-2 grid grid-cols-2 grid-rows-2 place-items-center'>
            <Image width={500} className='rounded-md' src={r10} alt='R10 Team'/>
            <Image width={500} className='rounded-md' src={r10} alt='R10 Team'/>
            <Image width={500} className='rounded-md' src={r10} alt='R10 Team'/>
            <Image width={500} className='rounded-md' src={r10} alt='R10 Team'/>

          </div>
          
        </div>

      </div>
    </div>
  )
}
