import Image from "next/image";

import { marked } from "marked";
import Header from "next/head";

function AboutData({ data }) {
  return (
    <div className="PostContainer my-16">
      <div className="xl:w-about-content lg:w-3/4 md:w-4/5 sm:w-11/12 ">
        <div className="w-full  md:h-h300 h-60  relative mx-auto">
          <Image
            className="rounded-sm"
            alt=""
            src={data.frontmatter.aboutImage}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="text-center ">
          <div className="font-secondary text-4xl my-8 leading-normal ">
            <h1>{data.frontmatter.about}</h1>
          </div>
          <div
            className="font-secondary text-xl text-textColor"
            dangerouslySetInnerHTML={{ __html: marked.parse(data.content) }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AboutData;
