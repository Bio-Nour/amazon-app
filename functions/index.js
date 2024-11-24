/* eslint-disable indent */
const functions = require("firebase-function");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")( process.env.STRIPE_SECRET_KEY);



// ap config
const app = express();

// midllewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world!"));

// listen command
exports.api = functions.https.onRequest(app);
app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    // Ok - created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

