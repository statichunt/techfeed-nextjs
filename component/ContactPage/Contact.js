

import { useForm } from "react-hook-form";


const Contact = () => {
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
    console.log(event)
    } 
  
  
    return (
     <>
     <div className="flex justify-center items-center my-8">
      
     <div className="w-4/6 mx-auto">
     <h1 className="heading text-center text-5xl font-lora font-medium">Get In Touch</h1>
     <form onSubmit={handleSubmit(onSubmit)}  className="mx-auto">
    
    <input className="inputField"  {...register("firstName", { required: true })} placeholder="First Name" />
        <input className="inputField"  {...register("lastName", { required: true })} placeholder="Last Name" />
   
    
       
       <input  className="inputField"  {...register("email", { required: true })} placeholder="Email" />
        {errors.exampleRequired && <span>This field is required</span>}
        <input  className="inputField"  {...register("subject", { required: true })} placeholder="Subject" />
        {errors.exampleRequired && <span>This field is required</span>}
      
        <textarea className="inputField" rows='7' {...register("message", { required: true })} placeholder="Message"></textarea>
        
        <div className="flex justify-center items-center " ><input type="submit" className="" /></div>
      </form>
     </div>
     </div>
     </>
    );
}

export default Contact
