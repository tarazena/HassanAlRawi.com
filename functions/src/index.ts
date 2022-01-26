import * as functions from "firebase-functions";
import * as SendGrid from "@sendgrid/mail";

exports.contact = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  if (request.method === "OPTIONS") {
    // Send response to OPTIONS requests
    response.set("Access-Control-Allow-Methods", "GET");
    response.set("Access-Control-Allow-Headers", "Content-Type");
    response.set("Access-Control-Max-Age", "3600");
    response.status(204).send("");
  } else {
    SendGrid.setApiKey(process.env.SENDGRID_KEY || "");

    if (
      request.body &&
      request.body.name &&
      request.body.email &&
      request.body.subject &&
      request.body.message
    ) {
      const data = request.body;

      SendGrid.send(data)
          .then(() => {
            response.send("Message Sent!");
          })
          .catch((error) => {
            console.log(error);
            response.status(500).send("Unable to send email");
          });
    } else {
      response.set("Access-Control-Allow-Origin", "*");
      response.status(400).send("Please provide a valid contact info");
    }
  }
});
