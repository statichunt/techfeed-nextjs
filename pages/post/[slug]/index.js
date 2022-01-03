import fs from "fs";
import path from "path";
import FilterData from "@/component/FilterData";
import AboutAuthor from "@/component/About/AboutAuthor";
import matter from "gray-matter";
import socialIcon from "../../../config/config.json";
import { getAboutData, getDefaultPage, getPost } from "@/lib/post";
import SinglePosts from "@/component/SinglePost";
import Layout from "@/component/Layout";

const SinglePost = ({ posts, frontmatter, content, slug, aboutData }) => {
  const { socialMedia } = socialIcon;

  const filter = posts.filter(
    (data) => data.frontmatter.category == frontmatter.category
  );

  const remainData = posts.filter((el) => !filter.includes(el));
  const filterDataById = filter.filter(
    (data) => data.frontmatter.id != frontmatter.id
  );

  const sortBySlug = [...filterDataById, ...remainData];
  console.log(slug);

  return (
    <Layout title={slug}>
      <div className="flex justify-center items-center PostContainer">
        <SinglePosts
          frontmatter={frontmatter}
          content={content}
          socialMedia={socialMedia}
          slug={slug}
        ></SinglePosts>
        <AboutAuthor data={aboutData} author={frontmatter.author}></AboutAuthor>
        <FilterData value={sortBySlug.slice(0, 3)}></FilterData>
      </div>
    </Layout>
  );
};

export default SinglePost;

export const getStaticPaths = async () => {
  const slugPost = getPost();

  const paths = slugPost.map((path) => ({
    params: {
      slug: path.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const singleMetaDataWithFrontMatter = fs.readFileSync(
    path.join("posts", slug.replace(/-/g, " ") + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(singleMetaDataWithFrontMatter);

  const posts = getPost();
  const aboutData = getAboutData();
  const defafult = getDefaultPage();
  console.log(defafult);

  return {
    props: {
      posts,
      frontmatter,
      content,
      aboutData,
      slug,
    },
  };
};
