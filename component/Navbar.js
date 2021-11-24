// import styles from '../styles/Nav.module.css'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'
import {CgMenuGridR} from 'react-icons/cg'
import Json from '../Json/menu.json'

function Navbar({toggle,isOpen}) {
    const router=useRouter()
    console.log(Json)
    
    return (
        <div className={isOpen ? 'hidden' : 'block'}>
            <nav className="flex justify-center items-center p-8">
                <div className="md:hidden ">
                    <h1 className= "menuButton" onClick={toggle}><CgMenuGridR/> Menu</h1>
                </div>
                <div className="md:block hidden">
                <ul className="flex justify-between items-center ">
                 
                 {
                     Json.map(data=><li key={data.menu} className="navItem"
                    
                     >
                         
                         <Link href={`${data.link}`}><a className="" >{data.menu}</a></Link>
                         
                         </li>)
                 }
                 
                    {/* <li className="navItem"><a>Features</a></li>
                    <li className="navItem">
                      <Link href='/about'><a >About</a></Link>
                  </li>
                    <li className="navItem"><a>Pages</a>
                    
                    </li>
                    <li className="navItem"><a>Contact</a></li> */}
                </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
