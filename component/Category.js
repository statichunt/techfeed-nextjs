import React from 'react'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Link from 'next/dist/client/link'
import { BsArrowRight } from 'react-icons/bs'
// import { FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa'
import { IconData } from './IconData'


function Category({value}) {
    const currentDate=new Date()
    const router = useRouter()
    return (
        <>
         
               <div className="allPost">
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
                 <div className="text-center font-lora">
                     <p>{blog.frontmatter.content}</p>
                 </div>
             </div>)
            }
        </div>
            
        </>
    )
}

export default Category
