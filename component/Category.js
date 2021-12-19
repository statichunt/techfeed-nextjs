import React from 'react'

import  Header  from 'next/head'
import Image from 'next/image'
import Link from 'next/dist/client/link'

function Category({value}) {
    const catagories= value.map(category => category.frontmatter.category)
    // const filtered = posts.filter(({category}, index) => !ids.includes(category.frontmatter.category, index + 1))
    const filterCategory = [...new Set(catagories)]
    
   
    return (
        <>
         <Header >
         <title>{filterCategory[0]}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Header>

         <h1 className='pageTitle'>Showing Blog From <span className='text-commonColor' >{filterCategory[0]}</span></h1>
         
               <div className="container">
                   
            {
                value.map(blog=><React.Fragment key={blog.slug}>
                   
                <div className="blog"  >
                
                <div className="w-full h-h200 relative"
                 >
                     <Image
                     alt='abc'
                     src={blog.frontmatter.image}
                     layout='fill'
                     objectFit="cover"
                     ></Image>
                     
                 </div>
               
              <div className='py-4 md:h-60'>
              <div className="heading  text-2xl text-center  mb-4 font-thin hover:opacity-70 transition "
                 >

                     <h1><Link href={`/${blog.slug}`}><a>{blog.frontmatter.heading}</a></Link></h1>

                 </div>
                 <div className=" font-lora text-xl text-center">
                     <p>{blog.frontmatter.content.slice(0,200)}</p>
                 </div>
              </div>
             </div>
                </React.Fragment>)
            }
        </div>
            
        </>
    )
}

export default Category
