import axios from "axios";

const baseUri = "http://localhost:8080";

export const sendMessage = (
  message
) => {
  axios
    .post(baseUri + "/chatbot", message)
    .then((response) => {
      console.log(response);
      const responseData = {
        text: response.data["message"]["fulfillmentText"],
      };

      return responseData;
    })
    .catch((error) => {
      console.log(error);
    });
};
