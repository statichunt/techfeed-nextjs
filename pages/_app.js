/* eslint-disable @next/next/no-page-custom-font */

import { useState } from 'react'
import { AppContext } from '../component/AppContext'
import Layout from '../component/Layout'
import '../styles/globals.css'
import Head from 'next/head'

import perameters from '../content/config.json'



function MyApp({ Component, pageProps }) {
  const [postLength,setPostLength]=useState("")
  const {perameter}=perameters
  
  return (
    
    <>
     <Head>
        <title>{perameter.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel='icon' href={perameter.icon}></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital@0;1&family=Oswald&display=swap" rel="stylesheet"/>
      </Head>
    <AppContext.Provider value={[postLength,setPostLength]}><Layout ><Component {...pageProps} /></Layout></AppContext.Provider>
   
    </>
  )
         
  
}

export default MyApp
