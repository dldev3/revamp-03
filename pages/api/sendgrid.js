import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
            to: "minutecodelabs@gmail.com", // Your email where you'll receive emails
            from: "minutecodelabs@gmail.com", // your website email address here
            subject: `client`,
            html: `<div>You've got a mail</div>
            
                ${req.body.name}
                ${req.body.email}
                ${req.body.thinking}
                ${req.body.company}
                ${req.body.website}
                ${req.body.budget}
                ${req.body.find}
                ${req.body.message}            
            `,
        });
    } catch (error) {
        // console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}

export default sendEmail;