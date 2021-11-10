
import styles from '../styles/Similar.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/dist/client/link'

export default function FilterData({value}) {
    const router =useRouter()
   
    return (
        <>
         <div className={styles.similar}>
         <div className={styles.heading}><h1>SIMILAR POST</h1></div>
          <div className={styles.SimilarPostContainer}>

             


              {
                  value.map(blog=><div className={styles.similarBlog} key={blog.slug}>
                   <Link href={`/${blog.slug}`}>
                   <div className={styles.similarBlogImage}
                    >
                        <Image
                        alt='abc'
                        src={blog.frontmatter.image}
                        layout='fill'
                        ></Image>
                        
                    </div>
                   </Link>
                    <div className={styles.similarBlogHeading}
                    >
  
                        <h1><Link href={`/${blog.slug}`}><a>{blog.frontmatter.heading}</a></Link></h1>
  
                    </div>
                </div>)
              }
              </div>  
         </div>
        </>
    )
}
