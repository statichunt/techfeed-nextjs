

import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/dist/client/link'

export default function FilterData({value}) {
    const router =useRouter()
   
    return (
        <>
         <div className="sm:my-20 my-10">
         <div className="heading text-center text-4xl tracking-tight my-5 font-normal cursor-default"><h1>SIMILAR POST</h1></div>
          <div className="sm:flex sm:flex-wrap">

             


              {
                  value.map(blog=><div className="w-full md:w-1/2 lg:w-1/3 md:px-3 box-border mt-8  "  key={blog.slug}>
                 
                   <div className="w-full h-h200 relative"
                    >
                        <Image
                        alt='abc'
                        src={blog.frontmatter.image}
                        layout='fill'
                        objectFit="cover"
                        ></Image>
                        
                    </div>
                   
                    <div className="heading text-center text-2xl hover:opacity-70"
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
