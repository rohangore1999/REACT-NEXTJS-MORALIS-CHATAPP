import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import TimeAgo from 'timeago-react'

function Message({ message }) {
    // to get the user Information
    const { user } = useMoralis()

    // it will that the message which has sent has your ethAddress if yes then its isUserMessage will be TRUE
    const isUserMessage = message.get('ethAddress') === user.get("ethAddress")


    return (
        <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`}>

            <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2'}`}>
                {/* ${isUserMessage && 'order-last'} >> if it is your messages then it will push to last(right of the screen) */}
                <Avatar username={message.get('username')} />
            </div>

            <div className={`flex space-x-4 p-3 rounded-lg ${isUserMessage ? 'rounded-br-none bg-pink-300' : 'rounded-bl-none bg-blue-400'}`}>
                {/* get('message') >> it is a moralis object */}
                <p>{message.get('message')}</p>
            </div>

            {/* timeago stamp */}
            <TimeAgo className={`text-[10px] italic text-gray-400 ${isUserMessage ? 'order-first pr-1': ''}`} datetime={message.createdAt} />


            <p className={`absolute -bottom-5 text-xs ${isUserMessage ? "text-pink-300" : "text-blue-300"}`} >{message.get('username')}</p>
        </div>
    )
}

export default Message
