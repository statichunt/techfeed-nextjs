import React from "react";
import Image from "next//image";

export default function Author({ data }) {
  return (
    <div className="mt-24 PostContainer">
      <div className="flex justify-center  items-center flex-col mx-auto lg:max-w-full">
        <div className="welcomeContent">
          <Image
            className="welcomeImage"
            alt=""
            src={data.frontmatter.aboutImage}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>

        <div className="heading sm:text-30px font-medium leading-5 my-12 ">
          <h3>{data.frontmatter.greetings}</h3>
        </div>
        <div className="authorDetails text-textColor">
          <p className="">{data.frontmatter.about}</p>
        </div>
      </div>
    </div>
  );
}
