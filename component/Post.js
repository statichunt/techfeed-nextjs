
import { useRouter } from 'next/router'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { IconData } from '../config/IconData'
import Link from 'next/dist/client/link'
import { useEffect } from 'react'
const Post = ({ value, page }) => {
   
    const postsPerPage = 4

    const currentDate = new Date


    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = value.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumber = Math.ceil(value.length / postsPerPage)
    const hasNextPage = pageNumber > page;
    const hasPreviousPage = page > 1;
    const router = useRouter()

    useEffect(() => {
        if (page > pageNumber) {
            router.push('/')
        }
    })
    return (
        <>
            <div className="allPost" >
                {
                    currentPosts.map(data => <div key={data.slug} className="w-full my-10 block" >



                        <div className="block">
                            <Image
                                alt="abc"
                                src={data.frontmatter.image}
                                width={1200}
                                height={700}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </div>
                        <div className=" lg:w-4/5 w-full mx-auto">
                            <div className="text-center my-14"

                            >
                                <div className="mb-1.5"> <Link href={`/category/${data.frontmatter.category}`}><a className="title">{data.frontmatter.title}</a></Link></div>



                                <h1 className="heading"> <Link href={`/${data.slug}`}><a>{data.frontmatter.heading}</a></Link></h1>

                                <div className="">
                                    <p className="italic font-lora md:text-lg text-sm font-normal text-nameColor">Posted on {currentDate.getFullYear() > new Date(data.frontmatter.date).getFullYear() ? data.frontmatter.date :
                                        currentDate.getMonth() > new Date(data.frontmatter.date).getMonth() ? data.frontmatter.date :
                                            currentDate.getDate() == new Date(data.frontmatter.date).getDate() ? <span>Today</span>

                                                :
                                                currentDate.getDate() - new Date(data.frontmatter.date).getDate() <= 3 ? <span>{currentDate.getDate() - new Date(data.frontmatter.date).getDate()} day ago </span> :
                                                    data.frontmatter.date} by <Link href='/about'><a><span className="hover">{data.frontmatter.author}</span></a></Link></p>
                                </div>
                            </div>

                            <div className="font-lora text-xl font-normal"><p >{data.frontmatter.content}</p></div>


                            <div className="my-10">

                                <div className="hover  flex justify-center items-center my-10">
                                    <Link href={`/${data.slug}`} ><a className="flex items-center text-xl justify-center capitalize">continue reading<span className="mx-1"><BsArrowRight /></span></a></Link>
                                </div>


                                <div className="flex justify-center">

                                    {
                                        IconData.slice(0, 3).map(d => <div key={d.class} className=""
                                        
                                        >
                                          <Link href={`${d.shareLink}+https://lifistyle-blog.vercel.app/${data.slug}`}>
                                                <a target="_blank" rel='noflow'  className={`socialLink 
                                        ${d.class}`}>{d.icon}</a>
                                        </Link>

                                           </div>)
                                    }
                                </div>
                            </div>


                        </div>
                    </div>)
                }

                {/* pagination  */}
                <div className="w-full lg:w-4/5 mx-auto flex justify-between">
                    {
                        hasPreviousPage ? <a>
                            <button
                                className="buttonClass  "
                                onClick={
                                    () => router.push(`/?page=${page - 1}`)
                                }>Prev</button>
                        </a> : <a>
                            <button
                                className="buttonClass  bg-gray-400 hover:bg-gray-400 cursor-default" disabled
                                onClick={
                                    () => router.push(`/?page=${page - 1}`)


                                }


                            >Prev</button>
                        </a>
                    }
                    {
                        hasNextPage ? <a>
                            <button className="buttonClass  "
                                onClick={
                                    () => router.push(`/?page=${page + 1}`)}>Next</button>
                        </a> :
                            <a>
                                <button className="buttonClass  bg-gray-400 hover:bg-gray-400 cursor-default" disabled
                                    onClick={
                                        () => router.push(`/?page=${page + 1}`)
                                    }>Next</button></a>}



                </div>
            </div>
        </>
    )
}
export default Post