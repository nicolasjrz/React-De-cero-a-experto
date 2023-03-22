const express = require("express");
const { dbConnection } = require("./database/config");
//require("dotenv").config({ path: "./config.env" });

require("dotenv").config();

// crear el servidor de express
const app = express();

// base de datos

dbConnection();

// lectura y parseo del body

app.use(express.json());

//rutas

app.use("/api/auth", require("./routes/auth"));

/// directorio publicoPORT=4000
app.use(express.static("public"));

/// escuchar peticion
app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});
