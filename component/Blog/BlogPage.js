import React,{useEffect} from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'


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
    console.log(pageList)
    const router = useRouter()

    useEffect(() => {
        if (page > pageNumber) {
            router.push('/blog')
        }
    })
    return (
        <div className="allPost">
                  {
                currentPosts.map(blog=><div className="w-full sm:w-1/2 md:w-1/3 pr-5 box-border  my-12 "  key={blog.slug}>
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
                 <div className="heading text-center text-2xl"
                 >

                     <h1><Link href={`/${blog.slug}`}><a>{blog.frontmatter.heading}</a></Link></h1>

                 </div>
                 <div className="text-center font-lora">
                     <p>{blog.frontmatter.content}</p>
                 </div>
             </div>)
            }
             <div className="w-full mx-auto md:flex md:justify-between">
                    {
                        hasPreviousPage ? <a>
                            <button
                                className="buttonClass  "
                                onClick={
                                    () => router.push(`/blog/?page=${page - 1}`)
                                }>prev</button>
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
                        <li className="list-none">page</li>
                        {
                            pageList.map(num=><li  key="num" className="mx-2 cursor-pointer text-xl hover:text-commonColorHover" onClick={
                                () => router.push(`/blog/?page=${num}`)}><a>{num}</a></li>)
                        }
                    </ul>
                    {
                        hasNextPage ? <a>
                            <button className="buttonClass  "
                                onClick={
                                    () => router.push(`/blog/?page=${page + 1}`)}>next</button>
                        </a> :
                            <a>
                                <button className="buttonClass  bg-gray-400 hover:bg-gray-400 cursor-default" disabled
                                    onClick={
                                        () => router.push(`/blog/?page=${page + 1}`)
                                    }>next</button></a>}



                </div>
        </div>
    )
}

export default BlogPage
