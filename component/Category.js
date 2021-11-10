import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Post.module.css'
import Image from 'next/image'
import Link from 'next/dist/client/link'
import { BsArrowRight } from 'react-icons/bs'
// import { FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa'
import { IconData } from './IconData'


function Category({value}) {
    const router = useRouter()
    return (
        <>
            <div className={styles.post} >
                {
                    value.map(data => <div key={data.slug} className={styles.dataPost}>



                        <div className={styles.dataImage}>
                        <Image
                            alt="abc"
                            src={data.frontmatter.image}
                            width={1200}
                            height={700}
                            layout="responsive"
                        />
                        </div>
                        <div className={styles.dataTitle}
                        >
                        <Link href= {`/category/${data.frontmatter.category}`}><a className={styles.title}>{data.frontmatter.title}</a></Link>
                        </div>


                        <h1 className={styles.heading}> <Link href={`/${data.slug}`}><a>{data.frontmatter.heading}</a></Link></h1>

                        <div className={styles.dataSubHeading}>
                        <p>Posted on {data.frontmatter.date} by <span className={styles.author}>{data.frontmatter.author}</span></p>
                        </div>

                        <div className={styles.content}><p>{data.frontmatter.content}</p></div>

                        
                <div className={styles.link}>

                <div className={styles.continue}>
                                <Link href={`/${data.slug}`} ><a className={styles.continueLink}>continue <span className={styles.arrow}><BsArrowRight /></span></a></Link>
                            </div>
                    

                    <div className={styles.socialLink}>
                        {
                            IconData.slice(0,3).map(data=><div key={data.class} className={`${styles.mediaIcon} ${styles[data.class]}`}><a href="#" className={styles.icon} >{data.icon}</a></div>)
                        }
                       
                    </div>
                </div>

                        



                    </div>)
                }
            </div>
        </>
    )
}

export default Category
