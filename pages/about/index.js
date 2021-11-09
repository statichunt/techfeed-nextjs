import fs from 'fs'
import path from 'path'
import AboutData from '../../component/About/AboutData'
const matter=require('gray-matter')

function About({posts}) {
  
   
    return (
        <div>
            <AboutData data={posts}></AboutData>
        </div>
    )
}

export async function getStaticProps(){
    
    const aboutFile= fs.readdirSync(path.join('About'))
     const metaDataWithFrontMatter= fs.readFileSync(path.join('About',aboutFile[0]),'utf-8') 
      const {data:frontmatter,content}=matter(metaDataWithFrontMatter)
     
    
    return{
      props:{
        posts:{
          frontmatter,
          content
        }
      }
    }
  }

export default About
