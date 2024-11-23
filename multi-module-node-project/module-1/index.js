const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Module 1");
});

app.listen(3000, () => {
  console.log("Module 1 server running on http://localhost:3000");
});
