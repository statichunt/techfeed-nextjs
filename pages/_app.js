
import { useState } from 'react'
import { AppContext } from '../component/AppContext'
import Layout from '../component/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import { title } from '../config/title'



function MyApp({ Component, pageProps }) {
  const [postLength,setPostLength]=useState("")
  console.log(title)
  
  return (
    
    <>
     <Head>
        <title>{title.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <AppContext.Provider value={[postLength,setPostLength]}><Layout ><Component {...pageProps} /></Layout></AppContext.Provider>
   
    </>
  )
         
  
}

export default MyApp
