require("dotenv").config();
const express = require("express");
const app = express();

const router = require("./routes");

const PORT = process.env.PORT || 5000;

app.use(router);
app.get("/", (req, res) => {
  res.send("Hello From Express");
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
