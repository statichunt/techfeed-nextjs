import React from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jvecemf', 'template_9x41wsk',e.target, 'user_9zzT5dxjTBAiznsMfcOTN')
        
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <>
        <div className="md:w-4/5 px-10 w-full mx-auto">
               <h1 className="heading text-center">Get In Touch</h1>
               
        <form className="mx-auto" onSubmit={sendEmail}>
              <div className="">
                  <div className="w-1/2"><input type="text" className="inputField" placeholder="First Name" name="First Name" /></div>
                  <div className="w-1/2"><input type="text" className="inputField" placeholder="Last Name" name="Last Name" /></div>
                  <div className="w-1/2"><input type="email" className="inputField" placeholder="First Name" name="email" /></div>
                  <div className="w-1/2"><input type="text" className="inputField" placeholder="subject" name="subject" /></div>
                  <div className="w-1/2"><input type="file" className="inputField" name="file" /></div>
                  <textarea className="inputField" type="text" rows="7" name="message"></textarea>
                  <button type="submit" className="block p-2 bg-yellow-500 rounded-full">Submit</button>
              </div>
        </form> 
        </div> 
        </>
    )
}

export default Contact
