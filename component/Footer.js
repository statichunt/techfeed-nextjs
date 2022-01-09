import socialIcon from "../config/config.json";
import footerData from "../config/config.json";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  const { socialMedia } = socialIcon;
  const { footer } = footerData;
  return (
    <div className="py-20 border-t-2 border-borderColor">
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
        <div className="flex ">
          {socialMedia.map((data) => (
            <Link href={data.profileLink} key={data.class}>
              <a className="" target="_blank" rel="noflow">
                <div className="socialMedia hover:bg-black">
                  <i className={`${data.icon} not-italic`}></i>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 font-secondary text-lg sm:text-xl">
          <p>
            {footer.activity}

            <Link href={footer.link}>
              <a
                className="text-primaryColor hover:opacity-80"
                target="_blank"
                rel="noflow"
              >
                {footer.name}
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
