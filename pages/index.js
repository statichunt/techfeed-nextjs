
import fs from 'fs'
import path from 'path'
import { useContext, useEffect } from 'react'
import Author from '../component/Author'
import UserContext from '../component/context'
import Post from '../component/Post'


const matter=require('gray-matter')


const Home=({posts})=> {
  const post = posts.sort((a,b)=>{ new Date(b.frontmatter.date)-new Date(a.frontmatter.date)})
console.log(post)
 const [value,setValue]=useContext(UserContext)
 console.log(value);
useEffect(()=>{
  setValue(post)
},[value])
  return (
    <div>
      <Author/>
   <Post></Post>
    </div>
  )
}

export async function getStaticProps(){
  const files= fs.readdirSync(path.join('posts'))
  
  const posts=files.map((filename)=>{
    const slug=filename.replace('.md','')
    

    const metaDataWithFrontMatter= fs.readFileSync(path.join('posts',filename),'utf-8')
 
    const {data:frontmatter,content}=matter(metaDataWithFrontMatter)

    console.log(content);

    return{
      slug,
      content,
      frontmatter
    }
  })

  return{
    props:{
      posts:posts
    }
  }
}
export default Home