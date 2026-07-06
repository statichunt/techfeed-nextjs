import config from "@/config/config.json";
import { marked } from "marked";
import Image from "next/image";
import Link from "next/link";
import AboutAuthor from "../About/AboutAuthor";

const SinglePosts = ({
  frontmatter,
  content,
  socialMedia,
  slug,
  data,
  author,
}) => {
  const { sharePost } = config.site;

  const currentDate = new Date();
  let options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <>
      <div key={slug} className=" w-full ">
        <div className="block mb-10">
          <Image
            className="object-cover w-full"
            alt="abc"
            src={frontmatter.image}
            width={1200}
            height={700}
          />
          {/* <img alt="abc" src={frontmatter.image} width={1200} height={700} /> */}
        </div>
        <div className="flex flex-col w-full sm:w-11/12 lg:w-4/5 justify-center items-center mx-auto ">
          <div className="">
            <Link href={`/category/${frontmatter.category.replace(/ /g, "-")}`}>
              <h2 className="title hover:text-primary transition-all">
                {frontmatter.category}
              </h2>
            </Link>
          </div>
          <h1 className="pageTitle text-h3 xl:text-h1 mt-7 mb-6">
            {frontmatter.title}
          </h1>

          <div className="mb-4">
            <p className="mb-0 italic  font-secondary md:text-lg mb-5 text-sm font-normal text-gray-400">
              Posted on{" "}
              {currentDate.getFullYear() >
              new Date(frontmatter.date).getFullYear() ? (
                new Date(frontmatter.date).toLocaleDateString("en-US", options)
              ) : currentDate.getMonth() >
                new Date(frontmatter.date).getMonth() ? (
                new Date(frontmatter.date).toLocaleDateString("en-US", options)
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
                new Date(frontmatter.date).toLocaleDateString("en-US", options)
              )}{" "}
              - by{" "}
              <Link href="/about">
                <span className="hover">{frontmatter.author}</span>
              </Link>
            </p>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
            className="markdown"
            //
          ></div>

          {sharePost == true && (
            <div className="mt-8 sm:mt-14 mb-20">
              <div className="flex justify-start items-center">
                {socialMedia.slice(0, 3).map((i) => (
                  <div key={i.name} className="">
                    <Link
                      target="_blank"
                      rel="noflow"
                      className={`socialMedia cursor-pointer ${i.name}`}
                      href={
                        i.name == "facebook"
                          ? `https://www.facebook.com/sharer/sharer.php?u=+https://lifistyle-blog.vercel.app/${slug}`
                          : i.name == "twitter"
                            ? `https://twitter.com/intent/tweet/?text=${frontmatter.heading}&url=${slug}`
                            : i.name == "pinterest"
                              ? `https://www.pinterest.com/pin/?text=${frontmatter.heading}&url=${slug}`
                              : "#"
                      }
                    >
                      <i className={`${i.icon} not-italic`}></i>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          <AboutAuthor data={data} author={author}></AboutAuthor>
        </div>
      </div>
    </>
  );
};

export default SinglePosts;
