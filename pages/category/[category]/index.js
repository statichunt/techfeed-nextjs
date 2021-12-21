
import fs from 'fs'
import path from 'path'
import Category from '../../../component/Category';
const matter = require('gray-matter')


function CategoryData({ category,posts }) {
 

  const filterByCategory = posts.filter(data => data.category == category)


  return (
    <>

      <div>
        <Category value={filterByCategory}></Category>
      </div>

    </>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const metaDataWithFrontMatter = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter, content } = matter(metaDataWithFrontMatter)
    return {
      content,
      frontmatter
    }
  })
  console.log(posts)
  const paths = posts.map((category) => ({
    params: {
      category: category.frontmatter.category.replace(/ /g,"-")
    }
  }))
  
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { category } = params;
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '').replace(/ /g,"-")


    const metaDataWithFrontMatter = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontmatter, content } = matter(metaDataWithFrontMatter)
    const category=frontmatter.category.replace(/ /g,"-")



    return {
      slug,
      content,
      frontmatter,
      category
    }
  })
  

  return {
    props: {
      category,
      posts



    }
  }
}

export default CategoryData;
