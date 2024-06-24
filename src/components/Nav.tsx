'use client'
import { Manuale } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname();
  const menu = [
    {
      name: 'home',
      path: '/'
    },
    {
      name: 'social media',
      path: '/social'
    },
    {
      name: 'public',
      path: '/stats'
    },
    {
      name: 'work',
      path: '/work'
    },
    {
      name: 'contact',
      path: '/contact'
    },

  ]
  return (
    <nav className=''>
      <ul className='flex gap-8'>
        {menu.map(item => (
          <Link className={`${item.path === pathname && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`} href={item.path}>{item.name}</Link>
        ))}
      </ul>
    </nav>
  )
}
