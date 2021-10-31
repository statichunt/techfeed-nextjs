import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({children}) {
    return (
        <>
        <Banner></Banner>
        <Navbar/>
        <main>{children}</main>
        <Footer></Footer>
            
        </>
    )
}

export default Layout
