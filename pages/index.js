
import Author from '../component/Author'
import Post from '../component/Post'
import matter from 'gray-matter'



const Home = ({ posts, page }) => {
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

  return {

    props: {
      posts: posts,
      page: +page
    }

  }

}

export default Home