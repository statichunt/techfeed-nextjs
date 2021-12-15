
import Link from 'next/dist/client/link'
import React from 'react'
// import React, { useContext } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
// import { AppContext } from '../AppContext'
import { NavElement } from '../../config/Menu'



function Navbar({ toggle,isOpen }) {

// const [postLength]=useContext(AppContext)
// //    create dropdown menu
//     const page = 0
    
//     const postsPerPage = 4
//     const pageNumber = Math.ceil(postLength / postsPerPage)


//     const pages = []

//     for (let i = 0; i < NavElement.length; i++) {

//         if (NavElement[i].submenu[0].page != "") {
//             for (let j = 1; j <= pageNumber; j++) {
//                 pages.push({
//                     list: NavElement[i].submenu[0].page + j,

//                     link: Number(NavElement[i].submenu[0].pageLink + j)

//                 })

//             }
//         }
//     }
    return (
        <div className={isOpen ? 'hidden' : 'block'}>
            <nav className="flex justify-center items-center p-8 border-b-2 border-footerBorder">
                <div className="md:hidden ">
                    <h1 className="menuButton" onClick={toggle}><CgMenuGridR /> Menu</h1>
                </div>
                <div className="md:block hidden">
                    {/* <ul className="flex justify-between items-center  ">

                        {

                            NavElement.map(data =><React.Fragment key={data.menu}>
                            <div key={data.menu} className={data.menu=="Home"?"hidden":"w-2 rounded-full h-h1 bg-gray-400"}></div>

                                <li  className="group relative " 


                                >

                                    <Link href={`${data.link}`}><a className="navItem" >{data.menu}</a></Link>
                                    <ul  className={data.submenu[0].page != "" ?"  hidden group-hover:block subMenu" :"hidden"}>
                                        {
                                            data.submenu[0].page != "" && pages.map(p => <Link href={`/?page=${page + p.link}`}><a className="text-black  "><li className="rounded-sm  hover:bg-gray-300 px-2 py-1 capitalize" key={p.list}>{p.list}</li></a></Link>)
                                        }

                                    </ul>
                                </li></React.Fragment>)
                        }
                    </ul> */}



<ul className="flex justify-between items-center  ">

{

    NavElement.map(data =><React.Fragment key={data.menu}>
    <div key={data.menu} className={data.menu=="Home"?"hidden":"w-2 rounded-full h-h1 bg-gray-400"}></div>

        <li  className="group relative " 


        >

            <Link href={`${data.link}`}><a className="navItem" >{data.menu}</a></Link>
            <ul  className={data.submenu[0].page != "" ?"  hidden group-hover:block subMenu" :"hidden"}>
                {
                    data.submenu[0].page != "" && data.submenu.map(p => <Link href={`/${ p.pageLink}`} key={p.page}><a className="text-black  " ><li className="rounded-sm 
                     hover:bg-gray-300 px-2 py-1 capitalize" >{p.page}</li></a></Link>)
                }

            </ul>
        </li></React.Fragment>)
}
</ul> 
                </div>

            </nav>
        </div>
    )
}

export default Navbar

// get all datta from .mdx file
