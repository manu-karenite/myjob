const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMessage = async (to, subject, text, html) => {
  const msg = {
    from: `myJOB myjob.buzz@rediffmail.com`,
    to: to, // Change to your recipient
    from: process.env.PRIMARY_EMAIL, // Change to your verified sender
    subject: subject,
    text: text,
    html: html,
  };
  sgMail
    .send(msg)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendMessage };
