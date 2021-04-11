const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const sendMessage = require("./chatbot");
var jsonParser = bodyParser.json();
var urlEncoded = bodyParser.urlencoded({ extended: true });

app.use(cors());

app.post("/chatbot", jsonParser, urlEncoded, function (req, res, next) {
  const message = req.body.message;

  sendMessage(message)
    .then((response) => {
      res.send({ message: response });
    })
    .catch((error) => {
      console.log(error);
    });
});

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

module.exports = app;