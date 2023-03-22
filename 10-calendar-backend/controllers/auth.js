const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/User");

const crearUsuario = async (req, res = response) => {
  try {
    const { name, email, password } = req.body;

    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "el usuario ya existe",
      });
    }

    usuario = new Usuario(req.body);
    // encriptar pasword

    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.status(201).json({ ok: true, uid: usuario._id, name: usuario.name });
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
