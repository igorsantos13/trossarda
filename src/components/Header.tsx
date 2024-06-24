import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href={'/'}>
          <h1 className='text-4xl text-transparent font-semibold bg-gradient-to-r from-yellow-300 to-yellow-700 bg-clip-text inline-block'>trossarda</h1>
        </Link>

        {/* desktop nav & contact me button */}
        <div className='hidden xl:flex gap-3'>
          <Nav />
          <Link href={'/contact'}>
            <Button>Fale Comigo!</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className='xl:hidden'>mobile nav</div>
      </div>
    </header>
  )
}
