import fs from "fs";
import path from "path";
import FilterData from "@/component/FilterData";
import matter from "gray-matter";
import socialIcon from "../../../config/config.json";
import { getAboutData, getPost,getAllSingleBlog } from "@/lib/post";
import SinglePosts from "@/component/SinglePost";
import Layout from "@/component/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SinglePost = ({ posts, frontmatter, content, slug, aboutData }) => {
  const router = useRouter();
  const latePosts = posts.map((f) => f.slug);

  // useEffect(() => {
  //   if (latePosts.includes(slug) == false) {
  //     router.push("/404");
  //   }
  // });
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
    <Layout title={slug.replace(/-/g, " ")}>
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
    path.join("content/posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(singleMetaDataWithFrontMatter);
  const posts = getPost();
  // const currentDate = new Date();
  // const filterByDate = posts.filter(
  //   (post) => new Date(post.frontmatter.date) <= currentDate
  // );
  const aboutData = getAllSingleBlog("content/about");

  return {
    props: {
      posts: posts,
      frontmatter: frontmatter,
      content: content,
      aboutData: aboutData,
      slug: slug,
    },
  };
};
