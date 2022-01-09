import { useRouter } from "next/router";

const Contact = ({ action, data }) => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.target.reset();
    router.push("/contact");
  };
  return (
    <>
      <div className=" container postContents my-8 px-4 ">
        <div className="w-full md:w-4/6 mx-auto text-textColor">
          <h1 className="pageTitle">{data.frontmatter.title}</h1>

          <form
            action={action}
            method="post"
            className="mx-auto "
            onSubmit={handleSubmit}
          >
            <div className="grid md:gap-x-4 md:grid-cols-2">
              <input className="inputField" placeholder="First Name" required />
              <input className="inputField" placeholder="Last Name" required />

              <input className="inputField" placeholder="Email" required />

              <input className="inputField" placeholder="Subject" required />
            </div>

            <textarea
              className="inputField w-full"
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
