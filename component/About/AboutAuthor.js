import Link from "next/dist/client/link";
import Image from "next/image";
import socialIcon from "../../config/config.json";

const AboutAuthor = ({ data, author }) => {
  const { socialMedia } = socialIcon;
  return (
    <div className="my-10 w-full ">
      <div className="flex flex-col text-center  sm:text-left lg:flex-row  ">
        <div className="flex-order">
          <div className="w-32 h-32 rounded-full relative mx-auto">
            <Image
              className="rounded-full"
              alt=""
              src={data.frontmatter.aboutImage}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>

        <div className="sm:ml-10 w-full sm:w-4/5 lg:my-0 my-8 text-center text-textColor lg:text-left">
          <p className="text-lg font-primary my-5">
            PUBLISHED BY <strong className="text-primaryColor">{author}</strong>
          </p>
          <p>{data.frontmatter.details}</p>
          <div className="hover my-5 cursor-pointer">
            <Link href="/about">
              <a className=" text-lg font-secondary  capitalize">
                {" "}
                know more..
              </a>
            </Link>
          </div>
          <div className="flex  justify-center lg:justify-start">
            {socialMedia.map((icon) => (
              <div key={icon.name} className="mr-2">
                <Link href={icon.link}>
                  <a
                    className="hover text-black pr-8"
                    target="_blank"
                    rel="noflow"
                  >
                    <i className={`${icon.icon} not-italic`}></i>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
