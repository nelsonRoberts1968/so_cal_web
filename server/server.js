const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require("dotenv").config()

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

//Stripe payment required 
const stripe = require ("stripe")(process.env.STRIPE_SECRET_TEST);
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

app.post("/payment", cors(), async (req, res) =>{
  let {amount, id } =  req.body
  try{
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description:"SoCal Community Group Membershhip",
      payment_method:id,
      confirm:true
    })
    console.log("payment", payment)
    res.json({
      message:"Payment Succesful",
      success: true

    })
  }catch(error){
    console.log("Error", error)
    res.json({
      message:"Payment Failed",
      success: false
    })
    
  }
})

// Serve up static assets
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
