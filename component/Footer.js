import socialIcon from "../config/config.json";
import footerData from "../config/config.json";
import Link from "next/link";
import { marked } from "marked";

const Footer = () => {
  const { socialMedia } = socialIcon;
  const { footer } = footerData;
  return (
    <div className="pb-20 pt-24 border-t border-borderDark">
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
        <div className="flex ">
          {socialMedia.map((data) => (
            <Link href={data.link} key={data.name}>
              <a className="" target="_blank" rel="noflow">
                <div className="socialMedia hover:bg-black">
                  <i className={`${data.icon} not-italic`}></i>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 font-secondary text-large ">
          <p>
            <p
              className="inline-block markdown text-large"
              dangerouslySetInnerHTML={{
                __html: marked(footer.copyright),
              }}
            ></p>
            {footer.theme_copyright && (
              <>
                &nbsp;| Theme by&nbsp;
                <Link href="https://statichunt.com/">
                  <a
                    className="text-primaryColor hover:opacity-80"
                    target="_blank"
                    rel="noflow"
                  >
                    Statichunt
                  </a>
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
