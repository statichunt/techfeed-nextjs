import SeoMeta from "@/component/SeoMeta";
import Contact from "@/components/ContactPage/Contact";
import config from "@/config/config.json";
import { getAllSingleBlog } from "src/lib/post";

export default async function Contacts() {
  const contactData = getAllSingleBlog("src/content/contact");
  const { contactFormAction } = config.site;

  return (
    <>
      <SeoMeta title="Get In Touch" />
      <Contact action={contactFormAction} data={contactData}></Contact>
    </>
  );
}
