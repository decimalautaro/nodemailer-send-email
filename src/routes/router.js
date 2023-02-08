const {Router} = require('express');
const nodemailer = require('nodemailer');

const router = Router();

router.post ("/send-email", async (req, res)=>{
    const {name, email, message, phone} = req.body;

    const msg =`
        Informacion del contacto:
            Nombre: ${name}
            Correo de contacto: ${email}
            Telefono: ${phone}
            Consulta: ${message}
    `
    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port:  process.env.PORT_EMAIL,
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const info =await transporter.sendMail({
        from:  process.env.EMAIL,
        to:  process.env.EMAIL,
        subject: `Correo de: <${email}> | Contacto: <${phone}>`,
        text: msg
    });

    console.log('Mesasage sent', info.messageId)
    res.send("recibido")
})

module.exports = router;
