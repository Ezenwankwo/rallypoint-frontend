export default function handler(req, res) {
    require('dotenv').config();

    const nodeMailer = require("nodemailer");
    const transporter = nodeMailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.password,
        },
    });
    const mailData = {
        from: req.body.email,
        to: ["onyeka.ezenwankwo@gmail.com", "t.awempo@gmail.com", "consultrallypoint@gmail.com"],
        subject: `Customer Inquiry from ${req.body.name}`,
        text: "Name: " + req.body.name + " Company: " + req.body.company + " Email: " + req.body.email + " Website: " + req.body.website + " Message: " + req.body.message,
        html: `<p>Name: ${req.body.name}</p><p>Company: ${req.body.company}</p><p>Email: ${req.body.email}</p><p>Website: ${req.body.website}</p><p>Message: ${req.body.message}</p>`,
    };
    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            console.log(info);
            res.status(200).send(info);
        }
        res.send()
    });
};