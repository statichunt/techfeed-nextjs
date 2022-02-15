import Link from "next/dist/client/link";
import Image from "next/image";
import socialIcon from "../../config/config.json";

const AboutAuthor = ({ data, author }) => {
  const { socialMedia } = socialIcon;
  return (
    <div className="w-full lg:mb-24">
      <div className="flex flex-col text-center  sm:text-left lg:flex-row  ">
        <div className="flex-order">
          <div className="w-40 h-40 md:w-60 md:h-60 rounded-full relative mx-auto">
            <Image
              className="rounded-full"
              alt=""
              src={data.frontmatter.aboutImage}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>

        <div className="md:ml-10 w-full md:w-4/5 lg:my-0 my-8 text-center text-textColor lg:text-left">
          <p className="text-lg font-primary mb-5 text-gray-400">
            PUBLISHED - BY <strong className="text-primaryColor">{author}</strong>
          </p>
          <p className="text-lg">{data.frontmatter.details}</p>
          <div className="hover my-5 inline-block">
            <Link href="/about">
              <a className=" text-lg font-secondary capitalize ">
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
                    className="hover text-black pr-8 transition-all duration-300 ease-in-out"
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
