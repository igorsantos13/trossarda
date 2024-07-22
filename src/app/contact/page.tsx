
import React from 'react'
import Socials from '@/components/Socials'
import ContactContainer from '@/components/ContactContainer'
import Photo from '@/components/Photo'

export default function Contact() {
  return (
    <section className='flex items-center justify-center h-[calc(100vh-107px)] md:h-full w-full'>
      <div className='max-w-[400px] max-h-2/4 w-11/12 md:max-w-[800px] shadow-sm shadow-accent space-y-8 py-4 px-2 bg-gradient-to-tr from-bg-primary  to-[#434343] container h-full flex flex-col justify-center  rounded-md'>
        {/* todo: adicionar div de animação */}
        <ContactContainer>
          <div className='flex flex-col text-center '>
            <h2 className='text-4xl leading-1 text-zinc-300 pb-2 underline underline-offset-8 mb-4'>Entre em contato aqui:</h2>
            {/* <span className='text-xl'>Entre em contato aqui:</span> */}
          </div>

          <div className='flex flex-row justify-evenly  items-center ' >

            <Socials socialName={true} containerStyles=' grid grid-cols-3 md:grid-cols-2 gap-3' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'/>
            {/* <ContactPhoto /> */}
            <div className='hidden md:size-[400px] md:block'>
              <Photo/>

            </div>
          </div>

        </ContactContainer>
      </div>

    </section>
  )
}


// hover:scale-105 hover:shadow-yellow-700
// flex flex-col gap-6