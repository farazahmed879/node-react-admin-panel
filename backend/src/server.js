const express = require("express");
const cors = require("cors");
const databaseConnection = require("./dbconnection");
const userRouter = require("./router/userRouter");
const dotenv = require("dotenv");
const sideMenuRouter = require("./router/sideMenuRouter");

dotenv.config();

const app = express();
app.options("*", cors());
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use("/sideMenu", sideMenuRouter);

app.get("/", (req, res) => {
  res.status(200).send("<h1> Wellcome to backend</h1>");
});

databaseConnection();

app.listen(process.env.PORT || 6666, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
 