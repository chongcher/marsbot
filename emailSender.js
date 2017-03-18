//Top level object
var emailSender = {};
/*
nodemailer
*/
var nodemailer = require('nodemailer');
var wellknown = require('nodemailer-wellknown');

var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'maverik.92@hotmail.com',
        pass: 'gN27Fv!J65dWvn&amp;^524H' //password to account to be given at event
    }
});

emailSender.sendEmail = function(recipientEmail, callback)
{
    //Define email options and structure
    var mailOptions =
    {
        from: '"Mars Bot" <maverik.92@hotmail.com>',
        to: recipientEmail, //insert the recipientEmail parameter
        subject: 'Message from Mars',
        text: 'Hello from Mars Bot!' 
    }

    //Send email using the options
    console.log("Add2: ", recipientEmail);
    transporter.sendMail(mailOptions, function(err, info){
        if(!err)
        {
            console.log('Message successfully sent: ' + info.response);
            callback("Sent email to: ", recipientEmail);
        }
        else
        {
            console.log(err);
            callback(null);
        }
    });
}

module.exports = emailSender;