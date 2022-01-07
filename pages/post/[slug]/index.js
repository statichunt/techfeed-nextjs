import fs from "fs";
import path from "path";
import FilterData from "@/component/FilterData";
import matter from "gray-matter";
import socialIcon from "../../../config/config.json";
import { getAboutData, getPost } from "@/lib/post";
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

  return (
    <Layout title={slug}>
      <div className="flex justify-center items-center container postContents">
        <SinglePosts
          frontmatter={frontmatter}
          content={content}
          socialMedia={socialMedia}
          slug={slug}
          data={aboutData}
          author={frontmatter.author}
        ></SinglePosts>

        <FilterData value={sortBySlug.slice(0, 3)}></FilterData>
      </div>
    </Layout>
  );
};

export default SinglePost;

export const getStaticPaths = async () => {
  const slugPost = getPost();
  const post = slugPost.filter((p) => p.frontmatter.draft != true);

  const paths = post.map((path) => ({
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
    path.join("content/posts", slug.replace(/-/g, " ") + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(singleMetaDataWithFrontMatter);

  const posts = getPost();

  const aboutData = getAboutData();

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
