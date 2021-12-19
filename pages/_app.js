
import { useState } from 'react'
import { AppContext } from '../component/AppContext'
import Layout from '../component/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import { title } from '../config/title'



function MyApp({ Component, pageProps }) {
  const [postLength,setPostLength]=useState("")
  
  
  return (
    
    <>
     <Head>
        <title>{title.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel='icon' href={title.icon}></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital@0;1&family=Oswald&display=swap" rel="stylesheet"/>
      </Head>
    <AppContext.Provider value={[postLength,setPostLength]}><Layout ><Component {...pageProps} /></Layout></AppContext.Provider>
   
    </>
  )
         
  
}

export default MyApp
