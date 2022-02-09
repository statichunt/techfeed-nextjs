import { useRouter } from "next/router";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/dist/client/link";
import { useEffect } from "react";
import config from "../config/config.json";
import Pagination from "./Pagination";
const Post = ({ value, page }) => {
  const { socialMedia } = config;
  const { pagination } = config.perameter;
  let options = { year: "numeric", month: "long", day: "numeric" };
  const currentDate = new Date();
  const indexOfLastPost = page * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const currentPosts = value.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumber = Math.ceil(value.length / pagination);
  const router = useRouter();

  useEffect(() => {
    if (page > pageNumber) {
      router.push("/");
    }
  });

  return (
    <>
      <div className="container postContents">
        {currentPosts.map((data) => (
          <div key={data.slug} className="w-full mt-10 mb-2 px-12 block">
            <div className="block">
              <a href="#"> <Image
                alt="abc"
                src={data.frontmatter.image}
                width={1200}
                height={700}
                layout="responsive"
                objectFit="cover"
                priority
              /></a>
            </div>
            <div className=" lg:w-4/6 leading-8 w-full mx-auto">
              <div className="text-center mt-16 mb-14">
                <div className="mb-1.5">
                  <Link href={`/category/${data.category}`}>
                    {<a className="title">{data.frontmatter.category}</a>}
                  </Link>
                </div>
                <h2 className="heading transition text-h2 hover:opacity-70 my-6 leading-normal ">
                  <Link href={`/post/${data.slug}`}>
                    <a>{data.frontmatter.title}</a>
                  </Link>
                </h2>

                <div className="">
                  <p
                    className="  italic font-secondary md:text-lg text-sm font-normal text-textGray"
                  >
                    Posted on{" "}
                    {currentDate.getFullYear() >
                    new Date(data.frontmatter.date).getFullYear() ? (
                      new Date(data.frontmatter.date).toLocaleDateString(
                        "en-US",
                        options
                      )
                    ) : currentDate.getMonth() >
                      new Date(data.frontmatter.date).getMonth() ? (
                      new Date(data.frontmatter.date).toLocaleDateString(
                        "en-US",
                        options
                      )
                    ) : currentDate.getDate() ==
                      new Date(data.frontmatter.date).getDate() ? (
                      <span>Today</span>
                    ) : currentDate.getDate() -
                        new Date(data.frontmatter.date).getDate() <=
                      3 ? (
                      <span>
                        {currentDate.getDate() -
                          new Date(data.frontmatter.date).getDate()}{" "}
                        day ago{" "}
                      </span>
                    ) : (
                      new Date(data.frontmatter.date).toLocaleDateString(
                        "en-US",
                        options
                      )
                    )}{" "}
                    by{" "}
                    <Link href="/about">
                      <a >
                        <span className=" hover">{data.frontmatter.author}</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="postsData text-center">
                {data.frontmatter.excerpt ? (
                  <p>{data.frontmatter.excerpt}</p>
                ) : (
                  <p>{data.content.slice(0, 300).replace(/[!@#$%^&*]/g, "")}</p>
                )}
              </div>

              <div className="mt-6">
                <div className="hover  flex-order mb-10">
                  <Link href={`/post/${data.slug}`}>
                    <a className="flex-order text-large  capitalize ">
                      continue reading
                      <span className="mx-1">
                        <BsArrowRight />
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="flex justify-center">
                  {socialMedia.slice(0, 3).map((i) => (
                    <div key={i.name} className="">
                      <Link
                        href={
                          i.name == "facebook"
                            ? `https://www.facebook.com/sharer/sharer.php?u=+https://lifistyle-blog.vercel.app/${data.slug}`
                            : i.name == "twitter"
                            ? `https://twitter.com/intent/tweet/?text=${data.frontmatter.title}&url=${data.slug}`
                            : i.name == "pinterest"
                            ? `https://www.pinterest.com/pin/?text=${data.frontmatter.title}&url=${data.slug}`
                            : "#"
                        }
                      >
                        <a
                          target="_blank"
                          rel="noflow"
                          className={`transition duration-700 ease-in-out socialMedia cursor-pointer
                                           ${i.name}
                                           `}
                        >
                          <i className={`${i.icon} not-italic`}></i>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* pagination  */}
        <div className="w-full lg:w-4/6 mx-auto flex justify-between mb-10">
          <Pagination pageNumber={pageNumber} page={page}></Pagination>
        </div>
      </div>
    </>
  );
};
export default Post;
