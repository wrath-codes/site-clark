import Head from "next/head"
import React from 'react'
import Header from "../../components/Header"


const Health = () => {
  return (
    <div>

      <Head>
        <title>Clark Seguros - Quem Somos? </title>
        <meta name="description" content="Clark Seguros - About" />
      </Head>
      <Header />

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 text-center max-w-3xl">
        Health
        
      </main>
    </div>
  )
}

export default Health