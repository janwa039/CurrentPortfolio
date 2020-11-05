const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')


const app = express()

app.use(express.static('public'))


app.use(bodyParser.urlencoded({extended: true}))

app.post('/formPage', (req, res) => {

    const user = process.env.GMAIL_USER
    const pass = process.env.GMAIL_PASS  
    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user,
            pass
        }
    })


    const mailOpts = {
        from: 'Your sender info here', // This is ignored by Gmail
        to: user,
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


app.listen(process.env.PORT || 3002, ()=>{
    console.log('server has started');
})