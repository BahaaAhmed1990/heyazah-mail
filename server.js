const path = require("path");
const mailRoute = require("./routes/mailRoute.js");
const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 4222;

const app = express();

console.log(__dirname);
// Middleware to set CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://heyazah.cloud");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/mail", mailRoute);

// app.use(notFound);
// app.use(errHandler);

app.listen(port, () => console.log(`server is running${port}`));
