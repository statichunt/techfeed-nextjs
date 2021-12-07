import React,{useState,useEffect} from 'react'
// import Banner from './Banner'
import DropDownMenu from './DropDownMenu'
import Footer from './Footer'
import Navbar from './Navbar'


function Layout({children,posts}) {
    console.log(posts)
    const [isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)

    }
    useEffect(()=>{
        const hiddenMenu=()=>{
            if(window.innerWidth>768 && isOpen){
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
