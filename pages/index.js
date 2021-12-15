import React, { useContext, useEffect } from 'react'
import Author from '../component/About/Author'
import Post from '../component/Post'
import matter from 'gray-matter'
import { AppContext } from '../component/AppContext';

const currentDate=new Date()
const Home = ({ posts, page,aboutFrontMatter }) => {
  const [postLength,setPostLength]=useContext(AppContext)
  
  useEffect(()=>{
    setPostLength(posts.length)
  })
  
  const post = posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  
  


  return (
    <div>
      <Author aboutData={aboutFrontMatter}></Author >
      <Post value={post} page={page}></Post>


    </div>
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


  // about page data

  const aboutFile = fs.readdirSync(path.join("About"));
  const metaDataWithFrontMatter = fs.readFileSync(
    path.join("About", aboutFile[0]),
    "utf-8"
  );
  const { data: aboutFrontMatter, content: aboutContent } = matter(metaDataWithFrontMatter);
  
  
  return {

    props: {
      posts:filterByDate,
      page: +page,
      aboutFrontMatter:aboutFrontMatter
    }

  }

}

export default Home