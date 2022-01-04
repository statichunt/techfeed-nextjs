import config from "../../config/config.json";
import style from "../../config/style.json";

import { useRouter } from "next/router";

const Contact = () => {
  console.log(
    "Oswald:wght@400".replace(/[*[0-9]+/g, " ").replace(/ [*[a-z]]+/g)
  );
  // const [redirect, setRedirect] = useState(false);
  const router = useRouter();
  const { action } = config.contactForm;
  const handleSubmit = (e) => {
    e.target.reset();
    router.push("/contact");
  };
  return (
    <>
      <div className=" PostContainer flex justify-center items-center my-8 px-4 ">
        <div className="w-full md:w-4/6 mx-auto text-textColor">
          <h1 className="pageTitle">Get In Touch</h1>

          <form
            action={action}
            method="post"
            className="mx-auto "
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between flex-wrap">
              <input className="inputField" placeholder="First Name" required />
              <input className="inputField" placeholder="Last Name" required />

              <input className="inputField" placeholder="Email" required />

              <input className="inputField" placeholder="Subject" required />
            </div>

            <textarea
              className="inputField sm:w-full"
              rows="7"
              placeholder="Message"
              required
            ></textarea>

            <div className="flex justify-center items-center  ">
              <a target="_blank" rel="noflow">
                <input type="submit" target="_blank" className="submit mx-4" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
