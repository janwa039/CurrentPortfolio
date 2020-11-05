const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const express = require('express')


const app = express()


app.use(bodyParser.urlencoded({extended: true}))

app.post('/formPage', (req, res) => {
// Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    })


    const mailOpts = {
        from: 'Your sender info here', // This is ignored by Gmail
        to: GMAIL_USER,
        subject: 'New message from contact form at affiongbassey.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }


      // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            res.render('contact-failure') // Show a page indicating failure
        }
        else {
            console.log('successfully sent the message', response)
            res.render('contact-success') // Show a page indicating success
        }
    })
})