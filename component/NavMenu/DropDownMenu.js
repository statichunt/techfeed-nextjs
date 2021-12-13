import Link from 'next/dist/client/link'
import { useContext } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { NavElement } from '../../config/Menu'
import { AppContext } from '../AppContext'




const DropDownMenu = ({isOpen, toggle}) => {

    //    create dropdown menu
    const [postLength]=useContext(AppContext)
    console.log(postLength)
    const page = 0
    
    const postsPerPage = 4
    const pageNumber = Math.ceil(postLength / postsPerPage)


    const pages = []

    for (let i = 0; i < NavElement.length; i++) {

        if (NavElement[i].submenu[0].page != "") {
            for (let j = 1; j <= pageNumber; j++) {
                pages.push({
                    list: NavElement[i].submenu[0].page + j,

                    link: Number(NavElement[i].submenu[0].pageLink + j)

                })

            }
        }
    }
    console.log(pages)
    return (
        <div className={isOpen ?"text-center block" : 'hidden top-0 h-0'}>
               <div className="flex justify-center items-center  pt-5 ">
               <h1 className= "menuButton" onClick={toggle}><AiOutlineClose/> Close</h1>
               </div>
                 <ul className="block  bg-gray-100 transition-transform duration-500 ease-in-out">
                 
             { NavElement.map(data=>   <li className="p-3 hover:bg-gray-300 group relative" onClick={toggle}  key={data.menu}><Link href={data.link}><a className="" >{data.menu}</a></Link> 
             
           
                                    <ul  className={data.submenu[0].page != "" ?"  hidden group-hover:block subMenu  static bg-gray-300 w-full " :"hidden"}>
                                        {
                                            data.submenu[0].page != "" && pages.map(p => <Link href={`/?page=${page + p.link}`}><a className="text-black  "><li className="rounded-sm  hover:bg-gray-100 px-2 py-1 capitalize" key={p.list}>{p.list}</li></a></Link>)
                                        }

                                    </ul>
             </li>)}
                    
            
                </ul>
        </div>
    )
}

export default DropDownMenu
