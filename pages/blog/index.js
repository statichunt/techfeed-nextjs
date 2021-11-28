import React from 'react'
import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

const Blogs = ({posts}) => {
    return (
        <div className="allPost">
            {
                posts.map(blog=><div className="w-full sm:w-1/2 md:w-1/3 pr-5 box-border  "  key={blog.slug}>
                <Link href={`/${blog.slug}`}>
                <div className="w-full h-h300 relative"
                 >
                     <Image
                     alt='abc'
                     src={blog.frontmatter.image}
                     layout='fill'
                     ></Image>
                     
                 </div>
                </Link>
                 <div className="heading text-center"
                 >

                     <h1><Link href={`/${blog.slug}`}><a>{blog.frontmatter.heading}</a></Link></h1>

                 </div>
                 <div className="text-center font-lora">
                     <p>{blog.frontmatter.content}</p>
                 </div>
             </div>)
            }
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
export default Blogs
