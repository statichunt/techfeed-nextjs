
import { data } from "autoprefixer";
import { useForm } from "react-hook-form";


const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,e) => {
        fetch("http://localhost:3000/api/mail",{
            method:'POST',
            header:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        console.log(data)
        e.target.reset()
    } 
  
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="block p-3 border-2"  {...register("name")} />
    
        <input  className="block p-3 border-2"  {...register("email", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <textarea className="block border-2" {...register("message", { required: true })}></textarea>
        
        <input type="submit" />
      </form>
    );
}

export default Contact
