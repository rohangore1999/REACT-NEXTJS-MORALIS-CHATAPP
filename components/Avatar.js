import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

function Avatar({ username, logoutOnPress }) {
    const { user, logout } = useMoralis()
    return (
        <div className=''>
            {/* dicebear >> it will generate images base on given name */}
            {/* ${username || user.get('username')} >>> here we are using 'or' as we will show the username image (which is us) or we need to show the other users images when someone send text to us (user.get() we get from Moralis) */}

            {/* onClick={() => logoutOnPress && logout()} >>> we ONLY want to use logout functionality when we have passed logoutOnPress props */}
            <Image className='rounded-full bg-black cursor-pointer hover:opacity-75' layout='fill' onClick={() => logoutOnPress && logout()} src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get('username')}.svg`} />
        </div>
    )
}

export default Avatar
