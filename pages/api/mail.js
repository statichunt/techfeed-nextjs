// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  console.log(req.body)
  const {name,email,message}=req.body
 const transporter= nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: 'faruk.themefisher@gmail.com',
      pass: 'czjprbvbxuazgnkw',
    },
  });
  try {
    const emailTransport= await transporter.sendMail({
      from:email,
      to:"rakibur74@gmail.com",
      subject:"contact",
      html:`<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      
      <p><strong>Message: </strong> ${message} </p><br>`
    })
    console.log('message',emailTransport.messageId)
  } catch (error) {
    console.log(error)
  }
  res.status(200).json({ name: name })
}
