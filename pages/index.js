
import fs from 'fs'
import path from 'path'



const matter=require('gray-matter')





const Home=({posts})=> {
  console.log(posts)
  return (
    <div>
     {
       posts.map(data=><div key={data.slag}>
         
       </div>)
     }
    </div>
  )
}

export async function getStaticProps(){
  const files= fs.readdirSync(path.join('posts'))
  
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