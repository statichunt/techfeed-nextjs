// import React, { useContext } from 'react'
// import UserContext from './context'
import styles from '../styles/Similar.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function FilterData({value}) {
    const router =useRouter()
    // const [value]=useContext(UserContext)
    console.log(value)
    return (
        <>
          <div className={styles.SimilarPostContainer}>
              {
                  value.map(blog=><div className={styles.similarBlog} key={blog.slug}>
                    <div className={styles.similarBlogImage}
                    onClick={() => {
                        router.push(
                            {
                                pathname: '/[slug]',
                                query: { slug: data.slug }
                            }
                        )
                    }}
                    >
                        <Image
                        alt='abc'
                        src={blog.frontmatter.image}
                        layout='fill'
                        ></Image>
                        
                    </div>
                    <div className={styles.similarBlogHeading}
                    onClick={() => {
                        router.push(
                            {
                                pathname: '/[slug]',
                                query: { slug: data.slug }
                            }
                        )
                    }}
                    >
  
                        <h1>{blog.frontmatter.heading}</h1>
  
                    </div>
                </div>)
              }
              </div>  
        </>
    )
}
