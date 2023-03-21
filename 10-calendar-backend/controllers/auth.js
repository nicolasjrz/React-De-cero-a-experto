const { response } = require("express");

const crearUsuario = (req, res = response) => {
  console.log("se requiere el /");
  res.json({ ok: true, msg: "register" });
};

const loginUsuario = (req, res = response) => {
  console.log("se requiere el /");
  res.json({ ok: true, msg: "login" });
};

const revalidarToken = (req, res = response) => {
  console.log("se requiere el /");
  res.json({ ok: true, msg: "renew" });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
