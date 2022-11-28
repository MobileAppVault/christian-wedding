import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PWD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: `Bitte per paypal an christian schicken.`,
    text: `Seine Addresse: ${req.body.mail}`,
    htm: `Seine Addresse: ${req.body.mail}`,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) {
      res.status(500).json({ ok: false, err: err });
      console.log(err);
    } else {
      res.status(200).json({ ok: true });
      console.log(info);
    }
  });
}
