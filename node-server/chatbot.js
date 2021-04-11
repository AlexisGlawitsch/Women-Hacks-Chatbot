const dialogflow = require("@google-cloud/dialogflow");
const config = require("./config");
const Path = require("path");

const projectId = config.projectId;
const configuration = {
  credentials: {
    private_key: config.privateKey,
    client_email: config.clientEmail
  }
};

const sessionId = "123456";
const sessionClient = new dialogflow.SessionsClient({
  keyFilename: Path.join(__dirname, "./key.json")
});

const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

async function sendMessage(message) {
  const botRequest = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
      }
    }
  };

  const response = await sessionClient
    .detectIntent(botRequest)
    .then((responses) => {
      console.log(JSON.stringify(responses));
    });

  return response;
}

module.exports = sendMessage;