const { response } = require("express");

const Usuario = require("../models/User");

const crearUsuario = async (req, res = response) => {
  try {
    const { name, email, password } = req.body;

    const usuario = new Usuario(req.body);

    await usuario.save();

    res.status(201).json({ ok: true, msg: "register", name, email, password });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  res.status(401).json({ ok: true, msg: "login", email, password });
};

const revalidarToken = (req, res = response) => {
  res.json({ ok: true, msg: "renew" });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
