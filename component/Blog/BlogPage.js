import React,{useEffect} from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'
import Header from 'next/head'


const BlogPage = ({posts,page}) => {
    const postsPerPage=6
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumber = Math.ceil(posts.length / postsPerPage)
    const hasNextPage = pageNumber > page;
    const hasPreviousPage = page > 1;
    const pageList=[]
    for (let i = 1; i <= pageNumber; i++) {
        pageList.push(i)
        
        
    }
    
    const router = useRouter()

    useEffect(() => {
        if (page > pageNumber) {
            router.push('/blog')
        }
    })
    return (
        <div className="allPost mx-auto">
            <Header>
            <title>Blog</title>
          </Header>
                  {
                currentPosts.map(blog=><div className="blog "  key={blog.slug}>
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
                 <div className="text-center font-lora text-2xl">
                     <p >{blog.frontmatter.content.slice(0,100)}</p>
                 </div>
             </div>)
            }
             <div className="w-full mx-auto flex justify-between">
                    {
                        hasPreviousPage ? <a>
                            <button
                                className="buttonClass  "
                                onClick={
                                    () => router.push(`/blog/?page=${page - 1}`)
                                }>
                                    prev</button>
                        </a> : <a>
                            <button
                                className="buttonClass  bg-gray-400 hover:bg-gray-400 cursor-default" disabled
                                onClick={
                                    () => router.push(`/blog/?page=${page - 1}`)


                                }


                            >prev</button>
                        </a>
                    }
                    <ul className="flex items-center">
                        <li className="list-none mx-2">Page</li>
                        {
                            pageList.map(num=><li  key={num} className={page==num? "text-buttonColor" : "mx-2 cursor-pointer text-xl hover:text-commonColorHover"} onClick={
                                () => router.push(`/blog/?page=${num}`)}><a>{num}</a></li>)
                        }
                    </ul>
                    {
                        hasNextPage ? <a>
                            <button className="buttonClass  "
                                onClick={
                                    () => router.push(`/blog/?page=${page + 1}`)}>Next</button>
                        </a> :
                            <a>
                                <button className="buttonClass  bg-gray-400 hover:bg-gray-400 cursor-default" disabled
                                    onClick={
                                        () => router.push(`/blog/?page=${page + 1}`)
                                    }>Next</button></a>}



                </div>
        </div>
    )
}

export default BlogPage
