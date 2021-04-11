const dialogflow = require("@google-cloud/dialogflow");

const config = require("./config");
const projectId = config.projectId;
const configuration = {
  credentials: {
    private_key: config.privateKey,
    client_email: config.clientEmail
  }
};

const sessionId = "123456";
const languageCode = "en-US";
const sessionClient = new dialogflow.SessionsClient(configuration);

const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

async function sendMessage(message) {
  const botRequest = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode
      }
    }
  };

  const response = await sessionClient
    .detectIntent(botRequest)
    .then((responses) => {
      console.log(JSON.stringify(responses));
      res.status(200).send({ data: responses });
      // const requiredResponse = responses[0].queryResult;
    })
    .catch((error) => {
      console.log(error);
      res.status(422).send({ e });
    });

  return response;
}

module.exports = sendMessage;