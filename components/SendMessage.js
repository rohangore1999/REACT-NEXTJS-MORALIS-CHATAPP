import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage({ endOfMessageRef }) {
    const { user, Moralis } = useMoralis()

    // track input
    const [message, setMessage] = useState("");


    // when button click function trigger
    const sendMessage = (e) => {
        // to avoid page refresh
        e.preventDefault()

        // if the input field empty then return direct
        if (!message) return

        // preparing moralis messages to push

        // Creating table in DB for Messges
        const Messages = Moralis.Object.extend('Messages')

        // creating instance of Messages
        const messages = new Messages()

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress') // we are using ethAddress >> because as username can be change bt ethAddres cant be change of an account
        }).then((message) => {

        }),
            (error) => {
                // THe save failed
                // the error is a Moralis.Error with an error code and message
                console.log(error.message)
            }

        // when message send successfully, we will scroll down
        endOfMessageRef.current.scrollIntoView({ behavior: 'smooth' })

        setMessage("")
    }


    return (
        <form className='flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400'>
            {/* w-11/12 >> for maximum space */}
            <input value={message} onChange={(e) => setMessage(e.target.value)} type={'text'} className='outline-none bg-transparent text-white placeholder-gray-500 flex-grow pr-5'
                placeholder={`Enter a Message ${user.getUsername()}...`} />
            <button onClick={sendMessage} type='submit' className='text-bold text-pink-500'>Send</button>
        </form>
    )
}

export default SendMessage
