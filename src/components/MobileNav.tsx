'use client'

import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import { menu } from '@/lib/menu'

export default function MobileNav() {
  const pathname = usePathname()
  const links = menu.map((link, index) => (
    <Link key={index} className={`${link.path === pathname && 'text-accent border-b-2 border-accent w-full'} flex flex-col w-1/4 capitalize font-medium hover:text-accent transition-all`} href={link.path}>{link.name}</Link>
  ))
  return (
    <Sheet>

      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent'/>
      </SheetTrigger>
      <SheetContent className='flex flex-col '>
        <SheetTitle className='hidden'>Menu</SheetTitle>
        <SheetDescription className='hidden'>Home, Social Media, Publico, Parcerios e Contato</SheetDescription>
          {/* logo */}
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href={'/'}>
            <h1 className='text-4xl text-transparent font-semibold bg-gradient-to-r from-yellow-300 to-yellow-700 bg-clip-text inline-block'>trossarda</h1>
          </Link>

        </div>

        {/* nav */}
        <nav>
          {links}
        </nav>
      </SheetContent>


    </Sheet>
  )
}
