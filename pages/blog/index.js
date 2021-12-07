
import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import BlogPage from '../../component/Blog/BlogPage';

const currentDate=new Date()
const Blogs = ({posts,page}) => {
  console.log(posts)
 
    return (
        <>
     <BlogPage posts={posts} page={page}></BlogPage>
        </>
    )
}
export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const fs = require("fs");
  const path = require("path");
  const directoryPath = path.join(process.cwd(), "posts");
  const pageSlugs = fs.readdirSync(directoryPath);
  const posts = pageSlugs.map((filename) => {
    const slug=filename.replace('.md','')
    const fullPath = path.join(directoryPath, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);
    return {
      slug,
      content,
      frontmatter
    }
  });
 
  
  const filterByDate=posts.filter(post=>new Date(post.frontmatter.date)<=currentDate)
  
  
  return {

    props: {
      posts:filterByDate,
      page: +page
    }

  }

}
  
export default Blogs
