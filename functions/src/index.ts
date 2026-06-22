import { onRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions/v2";
import * as SendGrid from "@sendgrid/mail";
import { config } from "dotenv";

config();

// 2nd Gen HTTPS function. `cors: true` handles preflight/OPTIONS and the
// Access-Control-Allow-Origin header automatically, so the manual CORS
// plumbing from the 1st Gen version is no longer needed.
export const contact = onRequest({ cors: true }, async (request, response) => {
  const data = request.body;
  if (data && data.name && data.email && data.subject && data.message) {
    SendGrid.setApiKey(process.env.SENDGRID_KEY || "");
    try {
      await SendGrid.send([
        {
          templateId: "d-c2a51996309c48a38e212cb9d87272ca",
          from: "contact@hassanalrawi.com",
          to: "tarazena@gmail.com",
          dynamicTemplateData: data,
        },
      ]);
      response.send("Message Sent!");
    } catch (error) {
      logger.error(error);
      response.status(500).send("Unable to send email");
    }
  } else {
    response.status(400).send("Please provide a valid contact info");
  }
});
