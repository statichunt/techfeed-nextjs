import React, { useContext, useEffect } from 'react'
import Author from '../component/Author'
import Post from '../component/Post'
import matter from 'gray-matter'
import { AppContext } from '../component/AppContext';

const currentDate=new Date()
const Home = ({ posts, page }) => {
  const [postLength,setPostLength]=useContext(AppContext)
  console.log(postLength)
  useEffect(()=>{
    setPostLength(posts.length)
  })
  
  const post = posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  
  


  return (
    <div>
      <Author />
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
  
  
  return {

    props: {
      posts:filterByDate,
      page: +page
    }

  }

}

export default Home