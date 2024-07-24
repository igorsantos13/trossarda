import Link from 'next/link'
import path from 'path'
import React from 'react'

import {FaTwitch, FaInstagram, FaYoutube, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const socials = [
  {
    icons: <FaTwitch />, path: 'https://twitch.tv/trossarda', socialName: 'Twitch'
  },
  {
    icons: <FaYoutube />, path: 'https://www.youtube.com/@trossarda', socialName: 'Youtube'
  },
  {
    icons: <BsTwitterX />, path: 'https://x.com/trossarda', socialName: 'Twiiter/X'
  },
  {
    icons: <FaInstagram />, path: 'https://instagram.com/trossarda', socialName: 'Instagram'
  },
  {
    icons: <FaTiktok />, path: 'https://tiktok.com/@trossarda', socialName: 'Tiktok'
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
        <div key={index} className='grid gird-col-6 grid-row-2 md:flex md:flex-row items-center gap-2'>
        <Link target='_blank'  href={item.path} className={`${iconStyles}`}>
          {item.icons} 
        </Link>
        {socialName && (<span>
          <Link target='_blank' href={item.path}>{item.socialName}</Link>
        </span>)}
        </div>
      ))}
    </div>
  )
}
