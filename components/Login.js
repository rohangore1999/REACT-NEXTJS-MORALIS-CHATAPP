import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import Head from 'next/head'


function Login() {

    // from moralis pulling authenticate function for logging in
    const { authenticate } = useMoralis()

    return (
        <div className='bg-black relative text-white'>
            <Head>
                <title>Metaverse - Login</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />

                {/* for post picture */}
                <meta property="og:title" content="" />
                <meta property="og:type" content="" />
                <meta property="og:image" content="/moralis.png" />
                <meta name="twitter:card" content="summary_large_image" />

                <meta property="og:description" content="" />
                <meta name="twitter:image:alt" content="" />
            </Head>

            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
                <Image src={'https://links.papareact.com/3pi'} className='rounded-full' objectFit='cover' height={200} width={200} />

                <button onClick={authenticate} className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse text-black'>Login to the METAVERSE</button>
            </div>

            <div className='w-full h-screen'>
                <Image src={'https://links.papareact.com/55n'} layout='fill' objectFit='cover' />
            </div>
        </div>
    )
}

export default Login
