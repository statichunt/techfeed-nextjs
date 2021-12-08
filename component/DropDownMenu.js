import Link from 'next/dist/client/link'
import {AiOutlineClose} from 'react-icons/ai'



const DropDownMenu = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ?"text-center block" : 'hidden top-0 h-0'}>
               <div className="flex justify-center items-center  pt-5 ">
               <h1 className= "menuButton" onClick={toggle}><AiOutlineClose/> Close</h1>
               </div>
                 <ul className="block  bg-gray-100 transition duration-500 ease-in-out">
                 
                 <li className="p-3 hover:bg-gray-300"
                    
                    >
                        
                        <Link href='/'><a className="" >Home</a></Link>
                        
                        </li>
                        <li className="p-3 hover:bg-gray-300">
                      <Link href='/about'><a >About</a></Link>
                  </li>
                 
                    <li className="p-3 hover:bg-gray-300"><Link href="/categories"><a>Category</a></Link></li>
                    <li className="p-3 hover:bg-gray-300"><Link href="/blog"><a>Blog</a></Link></li>
                    
                    <li className="p-3 hover:bg-gray-300"><a href="#">Pages</a>
                   
                    </li>
                    <li className="p-3 hover:bg-gray-300 font-lora"><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
        </div>
    )
}

export default DropDownMenu
