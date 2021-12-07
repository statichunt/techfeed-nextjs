// import styles from '../styles/Nav.module.css'
import Link from 'next/dist/client/link'

import { useContext, useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { AppContext } from './AppContext'
import { NavElement } from './MenuData/Menu'


function Navbar({ toggle,isOpen }) {

const [postLength]=useContext(AppContext)
   
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
     const [isDown, setDown]=useState(false)
    // const dropDown=()=>{
    //     setDown(!isDown)
    // }
    return (
        <div className={isOpen ? 'hidden' : 'block'}>
            <nav className="flex justify-center items-center p-8 border-b-2 border-footerBorder">
                <div className="md:hidden ">
                    <h1 className="menuButton" onClick={toggle}><CgMenuGridR /> Menu</h1>
                </div>
                <div className="md:block hidden">
                    <ul className="flex justify-between items-center  ">

                        {

                            NavElement.map(data =><>
                            <div className={data.menu=="Home"?"hidden":"w-2 rounded-full h-h1 bg-gray-400"}></div>

                                <li key={data.menu} className="navItem " 


                                >

                                    <Link href={`${data.link}`}><a className="" >{data.menu}</a></Link>
                                    <ul  className={data.submenu[0].page != "" ?"hidden group-hover:block mt-3 py-2 px-3 absolute w-40 bg-gray-100 z-10 -left-5" :"hidden"}>
                                        {
                                            data.submenu[0].page != "" && pages.map(p => <li className="px-2 py-1 w-36 hover:bg-gray-300" key={p.list}><Link href={`/?page=${page + p.link}`}><a className="text-black">{p.list}</a></Link></li>)
                                        }

                                    </ul>
                                </li></>)
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
export async function getStaticProps(){
    
    const files = fs.readdirSync(path.join("posts"));

    const posts = files.map((filename) => {
      const slug = filename.replace(".md", "");
  
      const metaDataWithFrontMatter = fs.readFileSync(
        path.join("posts", filename),
        "utf-8"
      );
  
      const { data: frontmatter, content } = matter(metaDataWithFrontMatter);
      return {
        slug,
        content,
        frontmatter,
      };
    });
     
    
    return{
      props:{
        posts
      }
    }
  }