import React from "react";
import Image from "next//image";


export default function Author({aboutData}) {
  console.log(aboutData)
  return (
    <div className="mt-24 PostContainer">
      <div className="flex justify-center  items-center flex-col mx-auto lg:max-w-full">
        <div className="welcomeContent">
          <Image
            className="welcomeImage"
            alt=""
            src={aboutData.frontmatter.aboutImage}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>

        <div className="heading sm:text-30px font-medium leading-5 my-12 ">
          <h3>{aboutData.frontmatter.greetings}</h3>
        </div>
        <div className="authorDetails">
          <p className="">{aboutData.frontmatter.about}</p>
        </div>
      </div>
    </div>
  );
}
