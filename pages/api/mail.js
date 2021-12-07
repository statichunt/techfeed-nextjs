// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'
import sanitize from 'sanitize-html'

export default async (req, res)=> {
  
const body=JSON.parse(req.body)
 
 console.log(body,'body')

 emailTransport(JSON.parse(req.body))
  


 
 
  res.status(200).json(req.body);
}
const user=process.env.USER
 const pass=process.env.PASSWORD
 const host=process.env.HOST
const transporter = nodemailer.createTransport({
  
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: user,
    pass: pass,
  },
});

const emailTransport= async({name,email,message,subject})=>{
  
  const output = `
  <p>Hello,<p>
  <p>You got a new contact request.</p>
  <h3>Contact Details</h3>
  <ul><li>Name: ${name}</li><li>Email: ${email}</li></ul>
  <h3>Message:</h3>
  <p>${message}</p>

`

const sendData={
  from:email,
  to:'themefisher.dev@gmail.com',
  subject:'contact ' + subject,
  html:sanitize(output)
}
return await transporter.sendMail(sendData)
 }