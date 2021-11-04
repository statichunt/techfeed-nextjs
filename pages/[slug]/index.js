import fs from 'fs'
import Image from 'next/image'
import path from 'path'
import styles from '../../styles/Post.module.css'
import marked from 'marked'
import { IconData } from '../../component/IconData'
import FilterData from '../../component/FilterData'


const matter=require('gray-matter')

const SinglePost=({frontmatter,content,slug})=> {
    console.log(frontmatter,slug,content);
    return (
        <div className={styles.post} >
        
            <div key={slug} className={styles.dataPost}>



                <div className={styles.dataImage}>
                <Image
                    alt="abc"
                    src={frontmatter.image}
                    width={1200}
                    height={700}
                    layout="responsive"
                />
                </div>
                <div className={styles.dataTitle}>
                <a className={styles.title}>{frontmatter.title}</a>
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
                >{frontmatter.heading}</h1>

                <div className={styles.dataSubHeading}>
                <p>Posted on {frontmatter.date} by <span className={styles.author}>{frontmatter.author}</span></p>
                </div>

                <div dangerouslySetInnerHTML={{ __html: marked(content) }} className={styles.content}></div>

                <div className={styles.link}>
                    

                    <div className={styles.socialLink}>
                        {
                            IconData.slice(0,3).map(data=><div key={data.class} className={`${styles.mediaIcon} ${styles[data.class]}`}><a href="#" className={styles.icon} >{data.icon}</a></div>)
                        }
                       
                    </div>
                </div>

                <FilterData></FilterData>



            </div>

            
        
    </div>
    )
}

export default SinglePost

export const getStaticPaths=async()=>{
 const files=  fs.readdirSync(path.join('posts'))
 console.log(files)

 const paths= files.map((path)=>({
     params:{
         slug:path.replace('.md','')
     }
 }))
 console.log(paths)
    return{
        paths,
        fallback:false

       

    }
}

export const getStaticProps = async({params})=>{
    const {slug}=params
    const metaDataWithFrontMatter=fs.readFileSync(path.join('posts',slug + '.md'),'utf-8')
     const {data:frontmatter,content}=matter(metaDataWithFrontMatter)

     return{
        props:{
            frontmatter,
            slug,
            content
        }

     }

}