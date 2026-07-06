import socialIcon from "@/config/config.json";
import Image from "next/image";
import Link from "next/link";

const AboutAuthor = ({ data, author }) => {
  const { socialMedia } = socialIcon;
  return (
    <div className="w-full lg:mb-24">
      <div className="flex justify-center items-center flex-col text-center  sm:text-left lg:flex-row  ">
        <div className="flex justify-center items-center">
          <div className="w-40 h-40 md:w-60 md:h-60 rounded-full relative mx-auto">
            <Image
              className="rounded-full object-cover"
              alt=""
              src={data.frontmatter.aboutImage}
              fill
            />
          </div>
        </div>

        <div className="md:ml-10 w-full md:w-4/5 lg:my-0 my-8 text-center text-text lg:text-left">
          <p className="text-lg font-primary mb-5 text-gray-400">
            PUBLISHED - BY <strong className="text-primary">{author}</strong>
          </p>
          <p className="text-lg">{data.frontmatter.details}</p>
          <div className="hover my-5 inline-block">
            <Link className=" text-lg font-secondary capitalize " href="/about">
              know more..
            </Link>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            {socialMedia.map((icon) => (
              <div key={icon.name} className="mr-2">
                <Link
                  className="hover text-black pr-8 transition-all duration-300 ease-in-out"
                  target="_blank"
                  rel="noflow"
                  href={icon.link}
                >
                  <i className={`${icon.icon} not-italic`}></i>
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
