import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header'
import Messages from '../components/Messages'


export default function Home() {

  // from moralis we are destructuring the isAuthenticated
  const { isAuthenticated, logout } = useMoralis()

  // it will check if the user is not logged in then it will throw to Login screen, else it will render our mainn app
  if (!isAuthenticated) return <Login />

  return (
    <div className='h-screen overflow-y-scroll bg-gradient-to-b from from-black to-fuchsia-900 overflow-hidden'>
      {/* h-screen >> it will take height of the screen */}
      {/* overflow-y-scroll >> to achieve scrollable messages  */}
      <Head>
        <title>Metaverse</title>
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



      <div className='max-w-screen-2xl mx-auto'>
        {/* Header */}
        <Header />

        {/* Messages */}
        <Messages />
      </div>
    </div>
  )
}
