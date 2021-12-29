import fs from "fs";
import Image from "next/image";
import path from "path";
import Link from "next/dist/client/link";
import { marked } from "marked";
import FilterData from "../../component/FilterData";
import AboutAuthor from "../../component/About/AboutAuthor";
import matter from "gray-matter";
import Header from "next/head";
import styles from "../../styles/Home.module.css";
import socialIcon from "../../content/config.json";
import { getAboutData, getPost } from "../../lib";


const SinglePost = ({
  posts,
  frontmatter,
  content,
  slug,
  aboutData
}) => {
  const { socialMedia } = socialIcon;

  const filter = posts.filter(
    (data) => data.frontmatter.category == frontmatter.category
  );

  const remainData = posts.filter((el) => !filter.includes(el));
  const filterDataById = filter.filter(
    (data) => data.frontmatter.id != frontmatter.id
  );
  const currentDate = new Date();
  const sortBySlug = [...filterDataById, ...remainData];

  return (
    <div className="flex justify-center items-center PostContainer">
      <Header>
        <title>{slug}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Header>
      <div key={slug} className=" w-full mt-20">
        <div className="block">
          <Image
            alt="abc"
            src={frontmatter.image}
            width={1200}
            height={700}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col w-full sm:w-4/5 justify-center items-center mx-auto">
          <div className="my-10">
            <Link href={`/category/${frontmatter.category}`}>
              <a className="title">{frontmatter.category}</a>
            </Link>
          </div>
          <h1 className="heading font-oswald text-center">
            {frontmatter.heading}
          </h1>

          <div className=" my-4">
            <p className="italic font-lora text-lg font-normal text-nameColor">
              Posted on{" "}
              {currentDate.getFullYear() >
              new Date(frontmatter.date).getFullYear() ? (
                frontmatter.date
              ) : currentDate.getMonth() >
                new Date(frontmatter.date).getMonth() ? (
                frontmatter.date
              ) : currentDate.getDate() ==
                new Date(frontmatter.date).getDate() ? (
                <span>Today</span>
              ) : currentDate.getDate() -
                  new Date(frontmatter.date).getDate() <=
                3 ? (
                <span>
                  {currentDate.getDate() - new Date(frontmatter.date).getDate()}{" "}
                  day ago{" "}
                </span>
              ) : (
                frontmatter.date
              )}{" "}
              by{" "}
              <Link href="/about">
                <a>
                  <span className="hover">{frontmatter.author}</span>
                </a>
              </Link>
            </p>
          </div>

          <div className="">
            <div
              dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
              className="font-lora text-xl content"
              //
            ></div>

            <div className="my-10">
              <div className="flex justify-start">
                {socialMedia.slice(0, 3).map((i) => (
                  <div key={i.class} className="">
                    <Link
                      href={`${i.shareLink}+https://lifistyle-blog.vercel.app/${slug}`}
                    >
                      <a
                        target="_blank"
                        rel="noflow"
                        className={`  socialMedia
                                                                     ${
                                                                       i.class ==
                                                                       "facebook"
                                                                         ? "hover:bg-blue-600 hover:text-text-secoundary"
                                                                         : i.class ==
                                                                           "twitter"
                                                                         ? "hover:bg-blue-400 hover:text-text-secoundary"
                                                                         : i.class ==
                                                                           "pinterest"
                                                                         ? "hover:bg-red-800 hover:text-text-secoundary"
                                                                         : undefined
                                                                     }`}
                      >
                        <i className={`${i.icon} not-italic`}></i>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <AboutAuthor
              data={aboutData}
              author={frontmatter.author}
            ></AboutAuthor>
          </div>
        </div>
        <FilterData value={sortBySlug.slice(0, 3)}></FilterData>
      </div>
    </div>
  );
};

export default SinglePost;

export const getStaticPaths = async () => {
 
  const slugPost = getPost()

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

  const posts=getPost()
 const aboutData=getAboutData()

  return {
    props: {
      posts,
      frontmatter,
      content,
      aboutData
    },
  };
};
