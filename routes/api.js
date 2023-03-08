const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Product = require("../models/products");

router.get("/", (req, res) => {
  res.json({ ok: true, msg: "Esto esta funcionando bien" });
});

router.post("/products", (req, res) => {
  let body = req.body;
  let product = new Product({
    name: body.name,
    description: body.description,
    price: body.price,
    img: body.img,
  });
  product.save((err, productDB) => {
    if (err) {
      return res.json({ ok: false, msg: "Hubo un error", error: err.message });
    } else {
      res.json({
        ok: true,
        msg: "Producto creado correctamente",
        product: productDB,
      });
    }
  });
});
module.exports = router;
