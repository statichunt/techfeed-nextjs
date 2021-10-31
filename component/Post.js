
import { useRouter } from 'next/router'
import styles from '../styles/Post.module.css'
import Image from 'next/image'
const Post=({data})=> {
    const router=useRouter()
    console.log(data)
    return (
        <>
        <div className={styles.post} >
            {
                data.map(data=><div key={data.slug} className={styles.dataPost}>

                    <Image
                    alt="abc"
                    src={data.frontmatter.image}
                    height={200}
                    width={150}
                    >


                    </Image>
                    <h1
                    onClick={()=>{
                        router.push(
                            {
                                pathname:'/[slug]',
                                query:{slug:data.slug}
                            }
                        )
                    }}
                    >{data.frontmatter.heading}</h1>


                </div>)
            }
            </div>
        </>
    )
}
export default Post