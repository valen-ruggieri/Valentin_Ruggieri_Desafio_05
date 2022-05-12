const express= require('express');
const router = express.Router();
const productos = require('./productos');
const imgRandom = require('./imgRandom');


router.get('/', (req, res)=>{
  res.render('plantilla.ejs', {productos, imgRandom: imgRandom()});
});

router.post('/productos', (req, res)=>{
  const producto = req.body;
  productos.push(producto);
  res.redirect('/');
});

module.exports = router;
