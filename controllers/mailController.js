const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = (req, res) => {
  const { name, entityName, email, phone, type, company } = req.body;
  console.log(name, entityName, email, phone, type, company);

  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  };

  let transporter = nodemailer.createTransport(config);
  let message = {
    from: process.env.EMAIL,
    to: ["Info@heyazah.com", "bahaaahmed19902012@gmail.com"],
    subject: "Place Order",
    html: `<b>Request from 3D macket </b><br />
    <b>Name</b>: ${name}<br/>
    <b>Interested in</b>: ${entityName}<br/>
    <b>Phone</b>: ${phone}<br/>
    <b>E-mail</b>: ${email}<br/>
    <b>Type</b>: ${type}<br />
    <b>Organization</b>: ${company}<br />
    `,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "you should receive an email",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

module.exports = { sendMail };
