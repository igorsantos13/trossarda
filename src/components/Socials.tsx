import Link from 'next/link'
import path from 'path'
import React from 'react'

import {FaTwitch, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'

const socials = [
  {
    icons: <FaTwitch />, path: 'https://twitch.tv/trossarda'
  },
  {
    icons: <FaYoutube />, path: 'https://youtube.com/'
  },
  {
    icons: <FaTwitter />, path: 'https://x.com/'
  },
  {
    icons: <FaInstagram />, path: 'https://instagram.com/'
  },
]

interface SocialsProps {
  containerStyles : string;
  iconStyles : string;
}

export default function Socials({containerStyles, iconStyles} : SocialsProps) {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => (
        <Link target='_blank' key={index} href={item.path} className={`${iconStyles}`}>
          {item.icons}
        </Link>
      ))}
    </div>
  )
}
