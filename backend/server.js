require("dotenv").config();
const express = require("express");
const app = express();
const DbConnect = require("./database");
const router = require("./routes");
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

const PORT = process.env.PORT || 5000;
DbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello From Express");
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
