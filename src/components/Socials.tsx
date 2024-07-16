import Link from 'next/link'
import path from 'path'
import React from 'react'

import {FaTwitch, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";

const socials = [
  {
    icons: <FaTwitch />, path: 'https://twitch.tv/trossarda', socialName: 'Twitch'
  },
  {
    icons: <FaYoutube />, path: 'https://youtube.com/', socialName: 'Youtube'
  },
  {
    icons: <FaTwitter />, path: 'https://x.com/', socialName: 'Twiiter/X'
  },
  {
    icons: <FaInstagram />, path: 'https://instagram.com/', socialName: 'Instagram'
  },
  {
    icons: <IoMdMail />, path: '#', socialName: 'email'
  },
  {
    icons: <FaWhatsapp  />, path: '#', socialName: 'zipzap'
  },
]

interface SocialsProps {
  containerStyles : string;
  iconStyles : string;
  socialName? : boolean
}

export default function Socials({containerStyles, iconStyles, socialName} : SocialsProps) {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => (
        <div key={index} className='flex flex-row items-center gap-2'>
        <Link target='_blank'  href={item.path} className={`${iconStyles}`}>
          {item.icons} 
        </Link>
        {socialName && (<span>
          <Link href={item.path}>{item.socialName}</Link>
        </span>)}
        </div>
      ))}
    </div>
  )
}
