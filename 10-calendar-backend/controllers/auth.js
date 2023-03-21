const { response } = require("express");

const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

  res.json({ ok: true, msg: "register", name, email, password });
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  res.json({ ok: true, msg: "login", email, password });
};

const revalidarToken = (req, res = response) => {
  console.log("se requiere el /");
  res.json({ ok: true, msg: "renew" });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
