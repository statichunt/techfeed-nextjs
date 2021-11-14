import Link from 'next/dist/client/link'
import {AiOutlineClose} from 'react-icons/ai'



const DropDownMenu = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? " text-center block transition duration-700 delay-700  ease-in-out h-auto" : 'hidden top-0 h-0'}>
               <div className="flex justify-center items-center  pt-5 ">
               <h1 className= "menuButton" onClick={toggle}><AiOutlineClose/> Close</h1>
               </div>
                 <ul className="block ">
                 
                 <li className="p-5"
                    
                    >
                        
                        <Link href='/'><a className="" >Home</a></Link>
                        
                        </li>
                 
                    <li className="p-5"><a>Features</a></li>
                    <li className="p-5">
                      <Link href='/about'><a >About</a></Link>
                  </li>
                    <li className="p-5"><a>Pages</a>
                   
                    </li>
                    <li className="p-5"><a>Contact</a></li>
                </ul>
        </div>
    )
}

export default DropDownMenu
