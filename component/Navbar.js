// import styles from '../styles/Nav.module.css'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'
import {CgMenuGridR} from 'react-icons/cg'


function Navbar({toggle,isOpen}) {
    const router=useRouter()
    return (
        <div className={isOpen ? 'hidden' : 'block'}>
            <nav className="flex justify-center items-center p-8">
                <div className="md:hidden ">
                    <h1 className= "menuButton" onClick={toggle}><CgMenuGridR/> Menu</h1>
                </div>
                <div className="md:block hidden">
                <ul className="flex justify-between items-center ">
                 
                 <li className="navItem"
                    
                    >
                        
                        <Link href='/'><a className="" >Home</a></Link>
                        <div className="hidden">
                            <ul className="" >
                                <li className="">Home 0</li>
                                <li className="">Home 0</li>
                                <li className="">Home 0</li>


                            </ul>
                        </div>
                        </li>
                 
                    <li className="navItem"><a>Features</a></li>
                    <li className="navItem">
                      <Link href='/about'><a >About</a></Link>
                  </li>
                    <li className="navItem"><a>Pages</a>
                    <div className="hidden">
                            <ul className="" >
                                <li className="">Page 0</li>
                                <li className="">Page 0</li>
                                <li className="">Page 0</li>


                            </ul>
                        </div>
                    </li>
                    <li className="navItem"><a>Contact</a></li>
                </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
