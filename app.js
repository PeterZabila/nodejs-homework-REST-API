const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// SENDGRID SETTINGS
const sgMail = require("@sendgrid/mail");
const {SENDGRID_API_KEY} = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
  to: "petrozabila@gmail.com",
  from: "petrozabila@gmail.com",
  subject: "Verify email",
  html: `<p>Verify email</p>`
}

sgMail.send(email) 
.then(() => console.log("Email sent successfully"))
.catch(error => console.log(error.message));
// SENDGRID SETTINGS

const app = express();

const contactsRouter = require("./routes/api/contacts");
const authRouter = require("./routes/api/auth");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
