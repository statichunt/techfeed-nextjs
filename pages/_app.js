
import { useState } from 'react'
import { AppContext } from '../component/AppContext'
import Layout from '../component/Layout'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  const [postLength,setPostLength]=useState("")
  
  
  return <AppContext.Provider value={[postLength,setPostLength]}><Layout ><Component {...pageProps} /></Layout></AppContext.Provider>
         
  
}

export default MyApp
