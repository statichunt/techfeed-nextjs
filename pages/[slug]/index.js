import { getDefaultPage } from '../../lib'
import React from 'react'
import Layout from '@/component/Layout'
import { marked } from 'marked'

const Default = ({post}) => {
 const {frontmatter,content,slug}=post[0]
    return (
       <Layout title={slug}>
          <div className='PostContainer'>
            <h1 className='my-8'>{frontmatter.title}</h1>
            <div className='content' dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>
        </div>
       </Layout>
    )
}


export async function getStaticPaths() {
 
    const posts=getDefaultPage()
    const paths = posts.map((d) => ({
      params: {
        slug: d.slug,
      },
    }));
    console.log(paths);
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  }
  
  // This also gets called at build time
  export async function getStaticProps({ params }) {
    const {slug}=params
    
   

    const post=getDefaultPage()
    const filterPost=post.filter(data=>data.slug===slug)
   

  
    // Pass post data to the page via props
    return { props: { post:filterPost } };
  }

export default Default
