import React from "react";
import Image from "next//image";

const Author = ({ data }) => {
  return (
    <div className="my-16 md:my-24 container postContents">
      <div className="flex justify-center items-center flex-col mx-auto lg:max-w-full">
        <div className="bannerContent">
          <Image
            className="welcomeImage"
            alt=""
            src={data.frontmatter.image}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>

        <div className="pageTitle font-medium">
          <h3 className="text-3xl">{data.frontmatter.greetings}</h3>
        </div>
        <div className="authorDetails text-textColor">
          <p className="text-xl leading-9">{data.frontmatter.about}</p>
        </div>
      </div>
    </div>
  );
};
export default Author;
