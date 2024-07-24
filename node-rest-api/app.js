const express = require("express");
const {MongoClient} = require("mongodb");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.post("/api/register-user", (request, response) => {
  const status = {
    Status: true,
  };
  response.send(status);
});
