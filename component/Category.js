import React from 'react'
import { useRouter } from 'next/router'
import  Header  from 'next/head'
import Image from 'next/image'
import Link from 'next/dist/client/link'

function Category({value}) {
    const currentDate=new Date()
    const router = useRouter()
    const catagories= value.map(category => category.frontmatter.category)
    // const filtered = posts.filter(({category}, index) => !ids.includes(category.frontmatter.category, index + 1))
    const filterCategory = [...new Set(catagories)]
    console.log(filterCategory)
   
    return (
        <>
         <Header >
         <title>{filterCategory[0]}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Header>
         
               <div className="allPost">
            {
                value.map(blog=><React.Fragment key={blog.slug}>
                   
                <div className="w-full sm:w-1/2 md:w-1/3 md:pr-5 box-border  my-12 "  >
                <Link href={`/${blog.slug}`}>
                <div className="w-full h-h300 relative"
                 >
                     <Image
                     alt='abc'
                     src={blog.frontmatter.image}
                     layout='fill'
                     objectFit="cover"
                     ></Image>
                     
                 </div>
                </Link>
                 <div className="heading text-center text-2xl h-28"
                 >

                     <h1><Link href={`/${blog.slug}`}><a>{blog.frontmatter.heading}</a></Link></h1>

                 </div>
                 <div className="text-center font-lora">
                     <p>{blog.frontmatter.content}</p>
                 </div>
             </div>
                </React.Fragment>)
            }
        </div>
            
        </>
    )
}

export default Category
