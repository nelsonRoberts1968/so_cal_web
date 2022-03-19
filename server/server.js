const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require("dotenv").config();

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

//npm package to send contact us posts
const nodemailer = require('nodemailer');

//for contactUs page
const transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
}

//nodemailer set up
const transporter = nodemailer.createTransport(transport);

// verify connection with nodemailer (contact page)
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

//Stripe payment required 
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Stripe Payment logic here
app.use(cors())

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "SoCal Community Group Membershhip",
      payment_method: id,
      confirm: true
    })
    console.log("payment", payment)
    res.json({
      message: "Payment Succesful",
      success: true

    })
  } catch (error) {
    console.log("Error", error)
    res.json({
      message: "Payment Failed",
      success: false
    })

  }
})

app.post("/contact", async (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  try {
    const contact = transporter.sendMail(
      {
        from: email,
        to: 'wisner.maggiel@gmail.com',
        subject: name + 'sent a contact request',
        text: message
      })
    console.log("contact", contact)
    res.json({
      message: "Message Sent!",
      success: true
    })
  } catch (error) {
    res.json({
      message: "An error occured. Message was not sent.",
      success: false
    })
  }
});

// Serve up static assets
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
