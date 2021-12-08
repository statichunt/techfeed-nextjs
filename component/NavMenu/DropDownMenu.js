import Link from 'next/dist/client/link'
import {AiOutlineClose} from 'react-icons/ai'
import { NavElement } from '../../config/Menu'



const DropDownMenu = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ?"text-center block" : 'hidden top-0 h-0'}>
               <div className="flex justify-center items-center  pt-5 ">
               <h1 className= "menuButton" onClick={toggle}><AiOutlineClose/> Close</h1>
               </div>
                 <ul className="block  bg-gray-100 transition-transform duration-500 ease-in-out">
                 
             { NavElement.map(menu=>   <li className="p-3 hover:bg-gray-300"  key={menu.menu}><Link href={menu.link}><a className="" >{menu.menu}</a></Link> </li>)}
                    
            
                </ul>
        </div>
    )
}

export default DropDownMenu
