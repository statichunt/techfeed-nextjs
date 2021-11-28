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
                     <div className="allPost" >
                {
                    value.map(data => <div key={data.slug} className="w-full my-10 block" >



                        <div className="block">
                            <Image
                                alt="abc"
                                src={data.frontmatter.image}
                                width={1200}
                                height={700}
                                layout="responsive"
                            />
                        </div>
                        <div className=" lg:w-4/5 md:full mx-auto">
                            <div className="text-center my-10"

                            >
                                <div className="mb-1.5"> <Link href={`/category/${data.frontmatter.category}`}><a className="title">{data.frontmatter.title}</a></Link></div>



                                <h1 className="heading"> <Link href={`/${data.slug}`}><a>{data.frontmatter.heading}</a></Link></h1>

                                <div className="">
                                    <p className="italic font-lora text-lg font-normal text-nameColor">Posted on {currentDate.getFullYear() > new Date(data.frontmatter.date).getFullYear() ? data.frontmatter.date:
                                        currentDate.getMonth() > new Date(data.frontmatter.date).getMonth() ? data.frontmatter.date :
                                        currentDate.getDate() == new Date(data.frontmatter.date).getDate()?<span>Today</span>
                                            
                                            :
                                            currentDate.getDate() - new Date(data.frontmatter.date).getDate() <= 3 ? <span>{currentDate.getDate() - new Date(data.frontmatter.date).getDate()} day ago </span> :
                                            data.frontmatter.date} by <Link href='/about'><a><span className="hover">{data.frontmatter.author}</span></a></Link></p>
                                </div>
                            </div>
                            
                            <div className="font-lora text-xl"><p >{data.frontmatter.content}</p></div>


                            <div className="my-10">

                                <div className="hover  flex justify-center items-center my-10">
                                    <Link href={`/${data.slug}`} ><a className="flex items-center text-xl justify-center capitalize">continue reading<span className="mx-1"><BsArrowRight /></span></a></Link>
                                </div>


                                <div className="flex justify-center">
                                    {
                                        IconData.slice(0, 3).map(d => <div  key={d.class} className=""
                                        >
                                        <Link href={`${d.shareLink}+https://lifistyle-blog.vercel.app/${data.slug}`}> 
                                        <a className={`socialLink 
                                        ${d.class}`}>{d.icon}</a>
                                        
                                        </Link></div>)
                                    }

                                </div>
                            </div>



                        </div>
                    </div>)
                }
              
            </div>
        </>
    )
}

export default Category
