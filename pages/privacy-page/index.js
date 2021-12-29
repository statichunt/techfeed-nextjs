import React from 'react'
import { getPrivacyPage } from '../../lib'
import { marked } from 'marked'


const PrivacyPage = ({posts}) => {
    return (
        <div className='PostContainer'>
            <h2 className='heading text-center my-8 leading-normal '>{posts.frontmatter.title}</h2>

            <div>
                <div className='content' dangerouslySetInnerHTML={{ __html: marked.parse(posts.content) }}>

                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {

    const postsdata=getPrivacyPage()
    
  
    return {
      props: {
        posts: postsdata
      },
    };
  }

export default PrivacyPage
