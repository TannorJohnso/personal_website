const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const creds = require('./config');

var transporter = nodemailer.createTransport(
  smtpTransport({
    service: 'gmail', // e.g. smtp.gmail.com
    auth: {
      user: creds.USER,
      pass: creds.PASS,
    },
  })
);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});

app.use(express.json());
app.post('/send', (req, res, next) => {
  console.log('reached');
  // const name = req.body.name;
  // const email = req.body.email;
  const message = req.query.messageHtml;
  console.log(req.query);

  var mail = {
    from: 'sendresponseemail@gmail.com',
    to: 'johnson.tannor@gmail.com',
    subject: 'Contact form request',
    html: message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail',
      });
    } else {
      res.json({
        msg: 'success',
      });
    }
  });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO RECT' });
});
