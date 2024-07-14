const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "ericka.mclaughlin49@ethereal.email",
      pass: "hw8sRadHQT3Rs7YnWG",
    },
  });

  const info = await transporter.sendMail({
    from: "'Coding Addict' <codingaddict@gmail.com>",
    to: "bar@example.com",
    subject: "Hello",
    html: "<h2>Sending Emails with Node.js</h2>",
  });

  res.json(info);
};

module.exports = sendEmail;
