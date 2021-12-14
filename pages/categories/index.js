import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import Link from 'next/dist/client/link';
import Header from 'next/head'
import { useRouter } from 'next/router';


const Categories = ({posts}) => {
    

    const catagories= posts.map(category => category.frontmatter.category)
    // const filtered = posts.filter(({category}, index) => !ids.includes(category.frontmatter.category, index + 1))
    const filterCategory = [...new Set(catagories)]

  
    
    return (
        <div>
          <h1 className='pageTitle'>All Categories </h1>
          <Header>
            <title>Category</title>
          </Header>
           <div className="allPost md:flex md:justify-around md:items-center heading block mx-auto text-center  ">
           {
                filterCategory.map(data=><div key={data} className="my-24 hover:shadow-sm hover:shadow-gray-400"><Link href={`/category/${data}`}><a className="capitalize ">{data}</a></Link></div>)
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
