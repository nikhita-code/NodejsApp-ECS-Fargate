const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js app deploying using AWS ECS Farget Cluster!! Hello , Nikhita here:) ");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
