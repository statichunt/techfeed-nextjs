
import { useRouter } from 'next/router'
// import styles from '../styles/Post.module.css'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { IconData } from './IconData'
import Link from 'next/dist/client/link'
const Post = ({ value }) => {

    const router = useRouter()
    return (
        <>
            <div className="w-4/5 flex justify-center flex-wrap mx-auto items-center my-20 " >
                {
                    value.map(data => <div key={data.slug} className="w-full" >



                        <div className="block">
                            <Image
                                alt="abc"
                                src={data.frontmatter.image}
                                width={1200}
                                height={700}
                                layout="responsive"
                            />
                        </div>
                       <div className="w-4/5 mx-auto">
                       <div className="text-center my-10"
                        
                        >
                           <div className="mb-1.5"> <Link href= {`/category/${data.frontmatter.category}`}><a className="title">{data.frontmatter.title}</a></Link></div>
                       


                        <h1 className="heading"> <Link href={`/${data.slug}`}><a>{data.frontmatter.heading}</a></Link></h1>

                        <div className="">
                            <p className="italic font-lora text-lg font-normal text-nameColor">Posted on {data.frontmatter.date} by <span className="hover">{data.frontmatter.author}</span></p>
                        </div>
                        </div>

                        <div className="font-lora text-xl"><p >{data.frontmatter.content}</p></div>


                        <div className="my-10">

                            <div className="hover  flex justify-center items-center my-10">
                                <Link href={`/${data.slug}`} ><a className="flex items-center text-xl justify-center capitalize">continue reading<span className="mx-1"><BsArrowRight /></span></a></Link>
                            </div>


                            <div className="flex justify-center">
                                {
                                    IconData.slice(0, 3).map(data => <div key={data.class} className={`socialLink ${data.class}`}><a href="#" className=""
                                     >{data.icon}</a></div>)
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
export default Post