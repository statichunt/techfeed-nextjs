import AboutData from "@/component/About/AboutData";
import { getAboutData } from "@/lib/post";
import Layout from "@/component/Layout";

function About({ posts }) {
  console.log(posts);
  return (
    <Layout title={posts.frontmatter.about}>
      <div>
        <AboutData data={posts}></AboutData>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const postsdata = getAboutData();

  return {
    props: {
      posts: postsdata,
    },
  };
}

export default About;
