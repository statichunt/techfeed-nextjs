import fs from 'fs'
import Image from 'next/image'
import path from 'path'
import styles from '../../styles/Post.module.css'

const matter=require('gray-matter')

const SinglePost=({frontmatter,content,slug})=> {
    console.log(frontmatter,slug,content);
    return (
        <div className={styles.post}>
            <div className={styles.dataPost}>
               <Image
               alt='image'
               src={frontmatter.image}
               width={400}
               height={300}
               >

               </Image>
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