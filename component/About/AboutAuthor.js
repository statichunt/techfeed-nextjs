import Link from "next/dist/client/link";
import Image from "next/image";
import socialIcon from "../../content/config.json";

function AboutAuthor({ data, author }) {
  const { socialMedia } = socialIcon;
  return (
    <div className="my-10 ">
      <p className="text-lg font-oswald my-5">
        PUBLISHED BY <strong className="text-primaryColor">{author}</strong>
      </p>
      <div className="flex flex-col text-center  sm:text-left lg:flex-row  ">
        <div className="w-32 h-h32  rounded-full relative mx-auto">
          <Image
            className="rounded-full"
            alt=""
            src={data.frontmatter.aboutImage}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>

        <div className="sm:ml-10 w-full sm:w-4/5 lg:my-0 my-8 text-center text-textColor lg:text-left">
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
              <div key={icon.class} className="mr-2">
                <Link href={icon.profileLink}>
                  <a className="hover text-black " target="_blank" rel="noflow">
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
}

export default AboutAuthor;
