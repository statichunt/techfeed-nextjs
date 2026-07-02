import SeoMeta from "@/component/SeoMeta";
import AboutData from "@/components/About/AboutData";
import { getAllSingleBlog } from "src/lib/post";

export default async function About() {
  const posts = getAllSingleBlog("src/content/about");

  return (
    <>
      <SeoMeta title="About" />
      <div>
        <AboutData data={posts}></AboutData>
      </div>
    </>
  );
}
