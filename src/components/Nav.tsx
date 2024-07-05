'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { menu } from '@/lib/menu'

export default function Nav() {
  const pathname = usePathname();
  const links = menu
  
  return (
    <nav className='flex items-center'>
      <ul className='flex flex-row items-center gap-8'>
        {links.map(item => (
          <Link key={item.path} className={`${item.path === pathname && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all `} href={item.path}>{item.name}</Link>
        ))}
      </ul>
    </nav>
  )
}
