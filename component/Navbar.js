// import styles from '../styles/Nav.module.css'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'
import {CgMenuGridR} from 'react-icons/cg'
import { NavElement } from './MenuData/Menu'


function Navbar({toggle,isOpen,post}) {
    const page=0
    const router=useRouter()
  const postsPerPage=4
  const pageNumber= Math.ceil(post / postsPerPage)
  

   const pages=[]
   
  for(let i=0; i<NavElement.length; i++){
    
   if (NavElement[i].submenu[0].page!="") {
   for(let j=1; j<=pageNumber;j++){
   pages.push ({list:NavElement[i].submenu[0].page+j,

                 link:Number(NavElement[i].submenu[0].pageLink+j)

})
 
    
   }
   }
   console.log(pages)
    
    


  }

    return (
        <div className={isOpen ? 'hidden' : 'block'}>
            <nav className="flex justify-center items-center p-8 border-b-2 border-footerBorder">
                <div className="md:hidden ">
                    <h1 className= "menuButton" onClick={toggle}><CgMenuGridR/> Menu</h1>
                </div>
                <div className="md:block hidden">
                <ul className="flex justify-between items-center ">
                 
                 {
                    
                NavElement.map(data=>
                   
                    <li key={data.menu} className="navItem"
                    
                     >
                         
                         <Link href={`${data.link}`}><a className="" >{data.menu}</a></Link>
                         <ul>
                             {
                               data.submenu[0].page!=""&&  pages.map(p=><li key={p.list}><Link href={`/?page=${page+p.link}`}><a>{p.list}</a></Link></li>)
                             }
                             
                         </ul>
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
