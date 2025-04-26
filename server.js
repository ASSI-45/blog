const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"./client/dist")))

app.get("/*name", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"), err)
});

app.listen(3000, () => {
  console.log("Server started add http://localhost:3000");
});

