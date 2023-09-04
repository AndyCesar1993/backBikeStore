import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user: "bikestore73@gmail.com",
        pass: "aenifcfsupzpwgyu"
    },
    tls: {
        rejectUnauthorized: false
    },
    from: "bikestore73@gmail.com"
})

export const sendEmail = async (to: string, user:string, code:string):Promise <void> =>{
    try{
        const mailOptions={
            from: `"BikeStore" bikestore73@gmail.com`,
            to,
            subject: "Código de verificación BikeStore",
            text: `                
                Cuenta BikeStore

                Código de seguridad

                Usa el siguiente código de seguridad para su cuenta de BikeStore 
                
                Email: ${to}.

                Usuario: ${user}

                Código de seguridad: ${code}

                
                Gracias,
                El equipo de BikeStore
            `
        }

        await transport.sendMail(mailOptions)
        console.log("Email sent")

    }catch(error){
        console.log("Failed to send email",error)
    }
}