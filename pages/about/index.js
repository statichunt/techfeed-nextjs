
import AboutData from "../../component/About/AboutData";
import { getAboutData } from "../../lib";


function About({ posts }) {
  return (
    <div>
      <AboutData data={posts}></AboutData>
    </div>
  );
}

export async function getStaticProps() {

  const postsdata=getAboutData()
  

  return {
    props: {
      posts: postsdata
    },
  };
}

export default About;
