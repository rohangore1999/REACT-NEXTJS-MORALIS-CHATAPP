import React from 'react'
import { useMoralis } from 'react-moralis'

function ChangeUsername() {
    const { setUserData, isUserUpdating, userError, user } = useMoralis();

    const setUsername = () => {
        const username = prompt(`Enter your new username (current: ${user.getUsername()})`)


        // if no username then return
        if (!username) return;

        // if username exist then upadate username from Moralis
        setUserData({
            username: username,
        })
    }


    return (
        <div className='text-sm z-50 absolute top-5 right-5'>
            {/* isUserUpdating >> whent */}
            <button disabled={isUserUpdating} onClick={setUsername} className='hover:text-pink-700'>
                Change your Username
            </button>
        </div>
    )
}

export default ChangeUsername
