const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sendGrid = require("@sendgrid/mail");

if (process.env.NODE_ENV !== "production") dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api", (req, res, next) => {
  res.send("Working");
});

app.post("/api/email", (req, res, next) => {
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>  
    <li>Name: ${req.body.firstName} ${req.body.lastName}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
`;

  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "diogo.fgomes.pinheiro@gmail.com",
    from: req.body.email,
    subject: "Contact from SendGrid",
    text: req.body.message,
    html: output
  };
  sendGrid
    .send(msg)
    .then(response => {
      res.status(200).json({
        success: true
      });
    })
    .catch(err => {
      console.log("error: ", err);
      res.status(401).json({
        success: false
      });
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
