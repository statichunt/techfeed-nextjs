import React,{useState,useEffect} from 'react'
// import Banner from './Banner'
import DropDownMenu from './NavMenu/DropDownMenu'
import Footer from './Footer'
import Navbar from './NavMenu/Navbar'


function Layout({children,posts}) {
    
    const [isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)

    }
    useEffect(()=>{
        const hiddenMenu=()=>{
            if(window.innerWidth>1024 && isOpen){
                setIsOpen(false)

            }
        }
        window.addEventListener('resize', hiddenMenu)

        return()=>{
            window.removeEventListener('resize',hiddenMenu)
        }
    })
    return (
        <>
        
        <Navbar toggle={toggle} isOpen={isOpen}  ></Navbar>
        <DropDownMenu isOpen={isOpen} toggle={toggle}></DropDownMenu>
        <main>{children}</main>
        <Footer></Footer>
            
        </>
    )
}

export default Layout
