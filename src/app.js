const express = require("express");
const bodyParser = require("body-parser");
const pasport = require("passport");
const app = express();
const authRout = require("./routes/auth");
const userRout = require("./routes/user");

app.use(pasport.initialize());
require("./middleware/passport")(pasport);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/api/auth", authRout);
app.use("/api/user", userRout);

module.exports = app;
