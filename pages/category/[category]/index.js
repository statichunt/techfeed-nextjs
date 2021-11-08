import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../../component/context';
import fs from 'fs'
import path from 'path'
import Category from '../../../component/Category';
const matter=require('gray-matter')


function CategoryData({category}) {
  const [value,setValue]=useContext(UserContext)

    useEffect(()=>{
      const localData= localStorage.getItem('post')
      const localValue=JSON.parse(localData)
      setValue(localValue)
      })
    
    const [blogByCategory,setBlogByCategory]=useState([])
    console.log(blogByCategory)
    console.log('value',value)
    useEffect(()=>{
        setBlogByCategory(value)
    },[value])

    const filterByCategory= blogByCategory.filter(data=>data.frontmatter.category==category)
    console.log('filter',filterByCategory)
   
    return (
       <>
       
           <div>
           <Category value={filterByCategory}></Category>
          </div>
       
       </>
    )
}

export const getStaticPaths=async()=>{
    const files= fs.readdirSync(path.join('posts'))
  
    const posts=files.map((filename)=>{
      const metaDataWithFrontMatter= fs.readFileSync(path.join('posts',filename),'utf-8')
      const {data:frontmatter,content}=matter(metaDataWithFrontMatter)
      return{   
        content,
        frontmatter
      }
    })
    const paths=posts.map((category)=>({
        params:{
            category:category.frontmatter.category
        }
    }))
    return{
     paths,
     fallback:false
    }
   }

   export const getStaticProps = async({params})=>{
       const {category}=params;
       
       return{
         props: {category}
       }
   }

export default CategoryData;
