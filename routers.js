const express = require("express");
const router = express.Router();
const productos = require("./productos");
const imgRandom = require("./imgRandom");

let web = [];

router.post("/form", (req, res) => {
  const theme = req.body.theme;
  web.splice(0, 1, theme);
  res.redirect("/form");
});

router.get("/productos", (req, res) => {
  res.render("productos.ejs", {
    productos,
    imgRandom: imgRandom(),
    theme: web[0],
  });
});

router.get("/form", (req, res) => {
  res.render("form.ejs", { productos, imgRandom: imgRandom(), theme: web[0] });
});
router.get("/", (req, res) => {
  res.render("home.ejs", { productos, imgRandom: imgRandom(), theme: web[0] });
});

router.post("/productos", (req, res) => {
  const producto = req.body;
  productos.push(producto);
  res.redirect("/productos");
});

module.exports = router;
