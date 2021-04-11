// Resources used for Node server
// https://www.smashingmagazine.com/2021/01/dialogflow-agent-react-application/
// https://codeburst.io/building-scalable-chatbots-in-react-with-dialogflow-1091ff462e40

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const sendMessage = require("./chatbot");
var jsonParser = bodyParser.json();
var urlEncoded = bodyParser.urlencoded({ extended: true });

app.use(cors());

app.post("/chatbot", jsonParser, urlEncoded, function (req, res, next) {
  const { message } = req.body;

  sendMessage(message)
    .then((response) => {
      res.status(200).send({ message: response });
    })
    .catch((error) => {
      console.log(error);
      res.status(442).send({ error });
    });
});

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

module.exports = app;