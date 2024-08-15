const express = require("express");
const cors = require("cors");
const databaseConnection = require("./dbconnection");
const userRouter = require("./router/userRouter");
const dotenv = require("dotenv");
const sideMenuRouter = require("./router/sideMenuRouter");

dotenv.config();

const app = express();

const corsOptions = {
  credentials: true,
  origin: ['http://localhost:3000'], // Adjust these URLs to match your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(userRouter);
app.use("/sideMenu", sideMenuRouter);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to backend</h1>");
});

databaseConnection();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});