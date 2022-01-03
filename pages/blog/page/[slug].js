import BlogPage from '@/component/Blog/BlogPage'
import Layout from '@/component/Layout'
import { getPost } from '@/lib/post'
import React from 'react'
import config from "../../../config/config.json"

const Blog = ({posts,page}) => {
    console.log(posts,page)
    
    return (
        <Layout title="Blog">
               <div className="mx-auto">
                 <BlogPage posts={posts} page={page}></BlogPage>
              </div>
             </Layout>
       
    )
}

export const getStaticPaths=()=>{
    const posts=getPost()
    const {postsPerPage}=config
    let paths=[]
    const numOfPage=Math.ceil(posts.length/postsPerPage)
    for (let i = 0; i <=numOfPage; i++) {
        paths.push({
            params:{
               slug:i.toString()
            }
        })
        
    }
    return {
        paths,
        fallback:false,
    }
}

export const getStaticProps=({params})=>{
   
    
    const page = parseInt((params && params.slug) || 1)
    const posts=getPost()

    return{
        props:{
            posts,
            page
        }
    }
}
export default Blog
