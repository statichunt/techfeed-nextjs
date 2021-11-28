

import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/dist/client/link'

export default function FilterData({value}) {
    const router =useRouter()
   
    return (
        <>
         <div className="my-20">
         <div className="heading text-center text-5xl my-5 font-normal cursor-default"><h1>SIMILAR POST</h1></div>
          <div className="sm:flex sm:flex-wrap">

             


              {
                  value.map(blog=><div className="w-full sm:w-1/2 md:w-1/3 pr-5 box-border  "  key={blog.slug}>
                   <Link href={`/${blog.slug}`}>
                   <div className="w-full h-h300 relative"
                    >
                        <Image
                        alt='abc'
                        src={blog.frontmatter.image}
                        layout='fill'
                        ></Image>
                        
                    </div>
                   </Link>
                    <div className="heading text-center"
                    >
  
                        <h1><Link href={`/${blog.slug}`}><a>{blog.frontmatter.heading}</a></Link></h1>
  
                    </div>
                </div>)
              }
              </div>  
         </div>
        </>
    )
}
