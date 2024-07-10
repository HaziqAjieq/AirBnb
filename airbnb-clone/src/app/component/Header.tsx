'use client';

import React from 'react'
import Image from 'next/image';
import { SearchIcon ,GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon } from '@heroicons/react/solid'


export default function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      
      {/* left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>

        <Image
        src='https://links.papareact.com/qd3'
        layout='fill'
        objectFit='contain' objectPosition='left'
        />

      </div>
      {/* middle  - search*/}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm
      text-gray-600 placeholder-gray-400
      '>
        <input className="pl-5 bg-transparent outline-none flex-grow "type="text" placeholder='Start your search' />
        <SearchIcon
        className='hidden md:inline h-8 cursor-pointer bg-red-400 text-white rounded-full
         p-2 md:mx-2'
        />
      </div>
      {/* Right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer'/>

          <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
            <MenuIcon className='h-6'/>
            <UserCircleIcon className='h-6'/>
          </div>

      </div>
      
    </header>
  )
}

// while creating a header identifies the each section and do it one by one (can also provide smaller component for this)

// image link https://links.papareact.com/qd3
// you can learn flex box through flexbox froggy
//install heroicons/react