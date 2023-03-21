const express = require("express");
//require("dotenv").config({ path: "./config.env" });

require("dotenv").config();

// crear el servidor de express
const app = express();

//rutas

/// directorio publicoPORT=4000

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   console.log("se requiere el /");
//   res.json({ ok: true });
// });

/// escuchar peticion
app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});
