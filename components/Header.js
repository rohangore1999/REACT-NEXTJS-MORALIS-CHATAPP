import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

function Header() {
    // to get the details of the users
    const { user, logout } = useMoralis()

    return (
        <div className='sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500'>
            <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
                {/* left */}
                <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid '>
                    <Image layout='fill' className='rounded-full object-cover' src={'https://links.papareact.com/3pi'} alt='' />
                </div>

                {/* middle */}
                <div className='text-left lg:text-center col-span-4'>
                    <div onClick={logout} className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>
                        {/* Avatar */}
                        <Avatar />
                    </div>

                    {/* welcome message */}
                    <h1 className='text-3xl'>Welcome to PAPAFAM METAVERSE</h1>

                    {/* username */}
                    <h2 className='text-5xl font-bold truncate'>{user.get('username')}</h2>


                    {/* change username component */}
                    <ChangeUsername />
                </div>
            </div>
        </div>
    )
}

export default Header
