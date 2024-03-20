const path = require("path");
const mailRoute = require("./routes/mailRoute.js");
const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 4222;

const app = express();

console.log(__dirname);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/mail", mailRoute);

// app.use(notFound);
// app.use(errHandler);

app.listen(port, () => console.log(`server is running${port}`));
