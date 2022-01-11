import AboutData from "@/component/About/AboutData";
import { getAboutData } from "@/lib/post";
import Layout from "@/component/Layout";

const About = ({ posts }) => {
  return (
    <Layout title="About">
      <div>
        <AboutData data={posts}></AboutData>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const postsdata = getAboutData();

  return {
    props: {
      posts: postsdata,
    },
  };
}

export default About;
