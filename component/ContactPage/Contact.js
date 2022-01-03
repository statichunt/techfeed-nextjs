import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import formType from "../../config/config.json";

import { useRouter } from "next/router";

const Contact = () => {
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();
  const { contactForm } = formType;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    setRedirect(!redirect);

  e.target.reset()
  

  }

  return (
    <>
      <div className=" PostContainer flex justify-center items-center my-8 px-4 ">
        <div className="w-full md:w-4/6 mx-auto text-textColor">
        <h1 className="pageTitle">Get In Touch</h1>
          
          
            <form
              action="https://airform.io/faruk.themefisher@gmail.com"
              method="post"
              className="mx-auto"
            >
              <div className="flex justify-between flex-wrap">
                <input
                  className="inputField"
                  {...register("firstName", { required: true })}
                  placeholder="First Name"
                />
                <input
                  className="inputField"
                  {...register("lastName", { required: true })}
                  placeholder="Last Name"
                />

                <input
                  className="inputField"
                  {...register("email", { required: true })}
                  placeholder="Email"
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <input
                  className="inputField"
                  {...register("subject", { required: true })}
                  placeholder="Subject"
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>

              <textarea
                className="inputField sm:w-full"
                rows="7"
                {...register("message", { required: true })}
                placeholder="Message"
              ></textarea>

              <div className="flex justify-center items-center  ">
                <a target="_blank" rel="noflow">
                  <input
                    type="submit"
                    target="_blank"
                    className="submit mx-4"
                  />
                </a>
              </div>
            </form>
         
        </div>
      </div>
    </>
  );
};

export default Contact;
