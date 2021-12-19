

import { useState } from "react";
import { useForm } from "react-hook-form";
import { formType } from "../../config/contacVlidation";


const Contact = () => {
    const [airForm,setAirForm]=useState(true)
    const handleAirForm=()=>{
        setAirForm(!airForm)
        
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data,e) => {


        const event={
            name:data.firstName + ' ' + data.lastName,
            email:data.email,
            subject:data.subject,
            message:data.message
        }
       fetch("http://localhost:3000/api/mail",{
            method:'POST',
            header:{'content-type':'application/json'},
            body:JSON.stringify(event)
        })
       
     e.target.reset()
    
    } 
  
  
    return (
     <>
     <div className="flex justify-center items-center my-8 px-4">
      
     <div className="w-full md:w-4/6 mx-auto">
     <h1 className="pageTitle">Get In Touch</h1>
     {
     formType.type=="nodemailer" && <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
    
    
    <input className="inputField"  {...register("firstName", { required: true })} placeholder="First Name" />
        <input className="inputField"  {...register("lastName", { required: true })} placeholder="Last Name" />
   
    
       
       <input  className="inputField"  {...register("email", { required: true })} placeholder="Email" />
        {errors.exampleRequired && <span>This field is required</span>}
        <input  className="inputField"  {...register("subject", { required: true })} placeholder="Subject" />
        {errors.exampleRequired && <span>This field is required</span>}
      
        <textarea className="inputField" rows='7' {...register("message", { required: true })} placeholder="Message"></textarea>
        
        <div className="flex justify-center items-center  " ><input type="submit" className="submit mx-4"/></div>
        
      </form>}
      {formType.type=="airform" &&<form action="https://airform.io/faruk.themefisher@gmail.com" method="post" className="mx-auto">
    
    
      <input className="inputField"  {...register("firstName", { required: true })} placeholder="First Name" />
          <input className="inputField"  {...register("lastName", { required: true })} placeholder="Last Name" />
     
      
         
         <input  className="inputField"  {...register("email", { required: true })} placeholder="Email" />
          {errors.exampleRequired && <span>This field is required</span>}
          <input  className="inputField"  {...register("subject", { required: true })} placeholder="Subject" />
          {errors.exampleRequired && <span>This field is required</span>}
        
          <textarea className="inputField" rows='7' {...register("message", { required: true })} placeholder="Message"></textarea>
          
         
          <div className="flex justify-center items-center  " ><input type="submit" className="submit mx-4"/></div>
        </form>

      }

     </div>
     </div>
     </>
    );
}

export default Contact
