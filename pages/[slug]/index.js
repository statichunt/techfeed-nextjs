import fs from "fs";
import Image from "next/image";
import path from "path";
import Link from "next/dist/client/link";
import { marked } from "marked";
import { IconData } from "../../config/IconData";
import FilterData from "../../component/FilterData";
import AboutAuthor from "../../component/About/AboutAuthor";
import matter from 'gray-matter';
import Header from "next/head";
import styles from "../../styles/Home.module.css"


// const matter = require("gray-matter");

const SinglePost = ({
  posts,
  frontmatter,
  content,
  slug,
  aboutFrontMatter,
}) => {

  const filter = posts.filter(
    (data) => data.frontmatter.category == frontmatter.category
  );


  const remainData = posts.filter((el) => !filter.includes(el));
  const filterDataById = filter.filter(
    (data) => data.frontmatter.id != frontmatter.id
  );
  const currentDate = new Date()
  const sortBySlug = [...filterDataById, ...remainData];


  return (
    <div className="flex justify-center items-center allPost">
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
            <Link href={`/category/${frontmatter.category}`}><a className="title">{frontmatter.title}</a></Link>
          </div>
          <h1 className="heading font-lora text-center">{frontmatter.heading}</h1>

          <div className=" my-4">
            <p className="italic font-lora text-lg font-normal text-nameColor">Posted on {currentDate.getFullYear() > new Date(frontmatter.date).getFullYear() ? frontmatter.date :
              currentDate.getMonth() > new Date(frontmatter.date).getMonth() ? frontmatter.date :
                currentDate.getDate() == new Date(frontmatter.date).getDate() ? <span>Today</span>

                  :
                  currentDate.getDate() - new Date(frontmatter.date).getDate() <= 3 ? <span>{currentDate.getDate() - new Date(frontmatter.date).getDate()} day ago </span> :
                    frontmatter.date} by <Link href='/about'><a><span className="hover">{frontmatter.author}</span></a></Link></p>
          </div>

          <div className="">
            <div
              dangerouslySetInnerHTML={{ __html: marked.parse(content) }}



              className={`font-lora text-xl ${styles.content}`}
            // 
            ></div>

            <div className="my-10">
              <div className="flex justify-start">
                {
                  IconData.slice(0, 3).map(d => <div key={d.class} className=""

                  >

                    <Link href={`${d.shareLink}+https://lifistyle-blog.vercel.app/${slug}`}>
                      <a className={`socialLink ${d.class}`}>{d.icon}</a>
                    </Link>

                  </div>)
                }

              </div>
            </div>

            <AboutAuthor data={aboutFrontMatter}></AboutAuthor>
          </div>
        </div>
        <FilterData value={sortBySlug.slice(0, 3)}></FilterData>
      </div>
    </div>
  );
};

export default SinglePost;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((path) => ({
    params: {
      slug: path.replace(".md", ""),
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
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(singleMetaDataWithFrontMatter);

  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const metaDataWithFrontMatter = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(metaDataWithFrontMatter);
    return {
      slug,
      content,
      frontmatter,
    };
  });

  const aboutFile = fs.readdirSync(path.join("About"));
  const metaDataWithFrontMatter = fs.readFileSync(
    path.join("About", aboutFile[0]),
    "utf-8"
  );
  const { data: aboutFrontMatter, content: aboutContent } = matter(metaDataWithFrontMatter);


  return {
    props: {
      posts,
      frontmatter,
      slug,
      content,
      aboutFrontMatter,
      aboutContent
    },
  };
};
