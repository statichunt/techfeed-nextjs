
import fs from 'fs'
import path from 'path'
import { useEffect} from 'react'
import Author from '../component/Author'
import Post from '../component/Post'


const matter=require('gray-matter')


const Home=({posts})=> {
 const post = posts.sort((a,b)=> new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
useEffect(()=>{
  localStorage.setItem('post',JSON.stringify(post))
},[post])

  return (
    <div>
      <Author/>
   <Post value={post}></Post>
   
  
    </div>
  )
}

export async function getStaticProps(){
  const files= fs.readdirSync(path.join('posts'))
  // const filesz= fs.readdirSync(path.join('About'))
  // console.log(filesz)
  
  const posts=files.map((filename)=>{
    const slug=filename.replace('.md','')
    const metaDataWithFrontMatter= fs.readFileSync(path.join('posts',filename),'utf-8') 
    const {data:frontmatter,content}=matter(metaDataWithFrontMatter)
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