const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')


const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.use(express.urlencoded( { extended: false } )); // this is to handle URL encoded data

// custom middleware to log data access
const log = function (request, response, next) {
	console.log(`${new Date()}: ${request.protocol}://${request.get('host')}${request.originalUrl}`);
    console.log(request.body); // make sure JSON middleware is loaded before this line
    // console.log(response); 
	next();
}

app.use(log);
// end custom middleware


app.use(express.static('public'))

// HTTP POST
app.post("/email", function(request, response) {
    // create reusable transporter object using the default SMTP transport

    const user = process.env.GMAIL_USER
    const pass = process.env.GMAIL_PASS
      const transporter = nodemailer.createTransport({
          // https://www.google.com/settings/security/lesssecureapps to allow the app
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
              user, // this should be YOUR GMAIL account
              pass // this should be your password
          }
      });
  
      var textBody = `FROM: ${request.body.name} EMAIL: ${request.body.email} MESSAGE: ${request.body.comments}`;
      var htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${request.body.name} <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>${request.body.comments}</p>`;
      var mail = {
          from: request.body.email, // sender address
          to: user, // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
          subject: "Mail From Contact Form", // Subject line
          text: textBody,
          html: htmlBody
      };
  
      // send mail with defined transport object
      transporter.sendMail(mail, function (err, info) {
          if(err) {
              console.log(err);
              response.json({ message: "message not sent: an error occured; check the server's console log" });
          }
          else {
            //   response.json({ message: `message sent: ${info.messageId}` });
            response.json({ message: 'success'});
          }
      });
  });
  


app.listen(process.env.PORT || 3002, ()=>{
    console.log('server has started');
})
  

