import footerData from "@/config/config.json";
import { marked } from "marked";
import Link from "next/link";

const Footer = () => {
  const { footer, socialMedia } = footerData;
  return (
    <div className="md:py-16 py-10 border-t border-borderDark">
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
        <div className="flex mb-4 sm:mb-8">
          {socialMedia.map((data) => (
            <Link href={data.link} key={data.name} target="_blank" rel="noflow">
              <div className="socialMedia hover:bg-black">
                <i className={`${data.icon} not-italic`}></i>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center font-secondary text-large">
          <div
            className="inline-block markdown text-large"
            dangerouslySetInnerHTML={{
              __html: marked(footer.copyright),
            }}
          ></div>
          {footer.theme_copyright && (
            <>
              &nbsp;| Theme by&nbsp;
              <Link
                href="https://statichunt.com/"
                className="text-primaryColor hover:opacity-80"
                target="_blank"
                rel="noflow"
              >
                Statichunt
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
