
import * as fs from 'fs';
// import  {join} from 'path'
import { useEffect} from 'react'
import Author from '../component/Author'
import Post from '../component/Post'
const matter=require('gray-matter')
const path = require('path');
const Home=({posts,page})=> {
 const post = posts.sort((a,b)=> new Date(b.frontmatter.date) - new Date(a.frontmatter.date))


  return (
    <div>
      <Author/>
      <Post value={post} page={page}></Post>
   

    </div>
  )
}

export const getServerSideProps=async ({query:{page=1}})=>{

   
    const files = fs.readdirSync(path.join('posts'))
    
   
  // const files= fs.readdirSync(PostPath)
  // const filesz= fs.readdirSync(path.join('About'))
  // console.log(filesz)
  
  const posts=files.map((filename)=>{
    const slug=filename.replace('.md','')
    // const postFilePath=join(PostPath,filename)
    // const metaDataWithFrontMatter= fs.readFileSync(postFilePath,'utf-8') 
    const metaDataWithFrontMatter = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const {data:frontmatter,content}=matter(metaDataWithFrontMatter)
    return{
      slug,
      content,
      frontmatter
    }
  })

  return{
    
     props:{
      posts:posts,
      page:+page
     }
    
    }
 
  }

export default Home