const express = require("express");

// crear el servidor de express
const app = express();

//rutas

app.get("/", (req, res) => {
  console.log("se requiere el /");
  res.json({ ok: true });
});

/// escuchar peticion
app.listen(4000, () => {
  console.log("servidor corriendo en el puerto 4000");
});
