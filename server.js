const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const banners = require("./server/banners/index.get.json");
const categories = require("./server/categories/index.get.json");
const products = require("./server/products/index.get.json");

// if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.error("enviroment", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.get("/banners", (req, res) => {
  res.status(200).send(banners);
});

app.get("/categories", (req, res) => {
  res.status(200).send(categories);
});

app.get("/products", (req, res) => {
  res.status(200).send(products);
});
