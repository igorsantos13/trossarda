import React from 'react'
import Socials from '@/components/Socials'
import Image from 'next/image'
import trossarda from '../../../public/assets/trossarda.png'

export default function Contact() {
  return (
    <div className='max-w-[800px] shadow-sm shadow-slate-950 space-y-8 py-4 px-2 bg-gradient-to-tr from-bg-primary  to-[#434343] container h-full flex flex-col justify-center rounded-md'>
      <div className='flex flex-col text-center'>
        <h2 className='text-4xl leading-1 '>Entre em contato aqui:</h2>
        {/* <span className='text-xl'>Entre em contato aqui:</span> */}
      </div>

      <div className='flex flex-row justify-evenly items-center '>
        <Socials socialName={true} containerStyles='grid grid-cols-2 gap-3' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'/>
        <div>
          <Image 
            src={trossarda}
            width={250}
            alt='trossarda'
          />
        </div>
      </div>
    </div>
  )
}


// hover:scale-105 hover:shadow-yellow-700
// flex flex-col gap-6