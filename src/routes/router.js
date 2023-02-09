const {Router} = require('express');
const nodemailer = require('nodemailer');

const router = Router();

router.post ("/send-email", async (req, res)=>{
    console.log(req.body)
    
    const {name, lastname, email, message, phone} = req.body;
    
    const mensaje= {
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        message: message
    }

    const msg =`
        Informacion del contacto:
            Nombre: ${mensaje.name}
            Apellido: ${mensaje.lastname}
            Correo de contacto: ${mensaje.email}
            Telefono: ${mensaje.phone}
            Consulta: ${mensaje.message}
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
    res.json(mensaje)
    console.log('Mesasage sent', info.messageId)
})

module.exports = router;
