
import fs from 'fs'
import path from 'path'
import Author from '../component/Author'
import Post from '../component/Post'
const matter=require('gray-matter')


const Home=({posts})=> {
 
  return (
    <div>
      <Author/>
   <Post data={posts}></Post>
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