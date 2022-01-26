import React, { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis"
import Message from './Message';
import SendMessage from './SendMessage'

// ONLY SHOW MESSAGES FROM THE LAST 60 MINUTES
const MINS_DURATION = 60;


function Messages() {
    const { user } = useMoralis()

    // to keep track and scroll when new message arrive
    const endOfMessageRef = useRef(null)

    // to pull the data from Moralis
    const { data, isLoading, error } = useMoralisQuery(
        'Messages', // database name
        (query) => query.ascending('createdAt').greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION)), [], {
        live: true // realtime listener 
    }) // sorting asc and ONLY SHOW MESSAGES LESS THAN 60 MINUTES

    console.log(data)

    return (
        <div className='pb-56'>
            <div className='my-5'>
                <ByMoralis variant='dark' style={{ marginLeft: 'auto', marginRight: 'auto' }} />
            </div>

            <div className='space-y-10 p-4'>
                {/* rendering each messages */}
                {data.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>

            <div className='flex justify-center'>
                {/* passing our reference to SendMessage Component */}
                <SendMessage endOfMessageRef={endOfMessageRef} />
            </div>

            <div ref={endOfMessageRef} className='text-center text-gray-400 mt-5'>
                {/* ref={endOfMessageRef} >>> it will keep pointing to the end of the div so as to keep track and scroll when new message arrive */}
                <p>You are up to date {user.getUsername()}</p>
            </div>

        </div>
    )
}

export default Messages
