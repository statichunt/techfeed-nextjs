import { useRouter } from 'next/router';
import React from 'react'
import * as fs from 'fs';
import path from 'path'
const matter=require('gray-matter')
import { useEffect,useState} from 'react'
import Home from '../../../pages'




const Pagination = ({post}) => {
    console.log(post);
    const router=useRouter()
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    useEffect(()=>{
        setPosts(value)
    })

   

    // const pageNumber=router.query.pagination
    // console.log(pageNumber)
    // useEffect(()=>{setCurrentPage(pageNumber)})
    console.log(currentPosts)
    return (
        <div>
            {/* <Post value={currentPosts}  currentPage={currentPage}></Post> */}
            <Home posts={post}></Home>
        </div>
    )
}

Pagination.getInitialProps=({query:{currentPage=1}})=>{

    const files= fs.readdirSync(path.join('posts'))
    // const filesz= fs.readdirSync(path.join('About'))
    // console.log(filesz)
    
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
      post:posts
      
   }
}
export default Pagination
