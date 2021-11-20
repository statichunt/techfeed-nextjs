
// import * as fs from 'fs';
// import  {join} from 'path'
import Author from '../component/Author'
import Post from '../component/Post'
const matter=require('gray-matter')
// const path = require('path');


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
// const files = fs.readdirSync(path.join(process.cwd(),'posts'))
// const posts=files.map((filename)=>{
//     const slug=filename.replace('.md','')
   
//     const metaDataWithFrontMatter = fs.readFileSync(path.join('posts', filename), 'utf-8')
//     const {data:frontmatter,content}=matter(metaDataWithFrontMatter)
//     return{
//       slug,
//       content,
//       frontmatter
//     }
//   })

const fs = require("fs");
const path = require("path");
const directoryPath = path.join(process.cwd(), "posts");
const pageSlugs = fs.readdirSync(directoryPath);
const posts = pageSlugs.map((slug) => {
  const fullPath = path.join(directoryPath, slug);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const {data:frontmatter,content} = matter(fileContents);
  return{
          slug,
          content,
          frontmatter
        }
});

  return{
    
     props:{
      posts:posts,
      page:+page
     }
    
    }
 
  }

export default Home