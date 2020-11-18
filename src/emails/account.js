const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jamiecha@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jamiecha@gmail.com',
        subject: 'Goodbye from task manager',
        text: `Good bye ${name}. I hope to you see you again`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
}