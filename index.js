const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
const productosRouter = require("./routers.js");

const server = app.listen(PORT, () => {
  console.log(`Servidor listo en el puerto ${PORT} ✅`);
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", productosRouter);

server.on("error", (error) => console.log("Hubo un error " + error));
