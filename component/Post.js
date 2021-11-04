
import { useRouter } from 'next/router'
import styles from '../styles/Post.module.css'
import Image from 'next/image'
import marked from 'marked'
import { BsArrowRight } from 'react-icons/bs'
// import { FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa'
import { IconData } from './IconData'

const Post = ({ data }) => {
    const router = useRouter()
    console.log(data)
    return (
        <>
            <div className={styles.post} >
                {
                    data.map(data => <div key={data.slug} className={styles.dataPost}>



                        <div className={styles.dataImage}>
                        <Image
                            alt="abc"
                            src={data.frontmatter.image}
                            width={1200}
                            height={700}
                            layout="responsive"
                        />
                        </div>
                        <div className={styles.dataTitle}>
                        <a className={styles.title}>{data.frontmatter.title}</a>
                        </div>


                        <h1
                            onClick={() => {
                                router.push(
                                    {
                                        pathname: '/[slug]',
                                        query: { slug: data.slug }
                                    }
                                )
                            }}
                            className={styles.heading}
                        >{data.frontmatter.heading}</h1>

                        <div className={styles.dataSubHeading}>
                        <p>Posted on {data.frontmatter.date} by <span className={styles.author}>{data.frontmatter.author}</span></p>
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: marked(data.content).slice(0, 850) }} className={styles.content}></div>

                        



                    </div>)
                }
            </div>
        </>
    )
}
export default Post