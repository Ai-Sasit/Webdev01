import express from "express";
import data from "./data.js";
const app = express();
const port = 5000

app.get('/api/products', (req, res) => {
    res.send(data.Product);
  })

app.get('/api/product/:id', (req, res) => {
    const product = data.Product.find(x => x._id === req.params.id);
    res.send(product);
  })

app.listen(port, () => {
    console.log(`\nServer listening at http://localhost:${port}/api/products`)
  })