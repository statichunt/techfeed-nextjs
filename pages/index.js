
import * as fs from 'fs';
import  {join} from 'path'
import { useEffect} from 'react'
import Author from '../component/Author'
import Post from '../component/Post'
const matter=require('gray-matter')
// const {join} = require('path');
const Home=({posts,page})=> {
 const post = posts.sort((a,b)=> new Date(b.frontmatter.date) - new Date(a.frontmatter.date))


  return (
    <div>
      <Author/>
      <Post value={post} page={page}></Post>
   

    </div>
  )
}

  Home.getInitialProps=({query:{page=1}})=>{

   
    const PostPath=join(process.cwd(),'posts')
  
   
  const files= fs.readdirSync(PostPath)
  // const filesz= fs.readdirSync(path.join('About'))
  // console.log(filesz)
  
  const posts=files.map((filename)=>{
    const slug=filename.replace('.md','')
    const postFilePath=join(PostPath,filename)
    const metaDataWithFrontMatter= fs.readFileSync(postFilePath,'utf-8') 
    const {data:frontmatter,content}=matter(metaDataWithFrontMatter)
    return{
      slug,
      content,
      frontmatter
    }
  })

  return{
    
      posts:posts,
      page:+page
    
    }
 
  }

export default Home