import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import Link from 'next/dist/client/link';


const Categories = ({posts}) => {
    

    const catagories= posts.map(category => category.frontmatter.category)
    // const filtered = posts.filter(({category}, index) => !ids.includes(category.frontmatter.category, index + 1))
    const filterCategory = [...new Set(catagories)]

   
    
    return (
        <div>
           <div className="allPost flex justify-around items-center heading">
           {
                filterCategory.map(data=><div key={data}><Link href={`/category/${data}`}><a >{data}</a></Link></div>)
            }
           </div>
        </div>
    )
}

export async function getStaticProps(){
    
    const files = fs.readdirSync(path.join("posts"));
  
    const posts = files.map((filename) => {
      const slug = filename.replace(".md", "");
  
      const metaDataWithFrontMatter = fs.readFileSync(
        path.join("posts", filename),
        "utf-8"
      );
  
      const { data: frontmatter, content } = matter(metaDataWithFrontMatter);
      return {
        slug,
        content,
        frontmatter,
      };
    });
     
    
    return{
      props:{
        posts
      }
    }
  }
export default Categories
