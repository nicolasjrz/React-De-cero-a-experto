const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/User");

const crearUsuario = async (req, res = response) => {
  const { name, email, password } = req.body;
  try {
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

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Usuario y password invalidos.",
      });
    }

    //confinar los passwords

    const validPassword = bcrypt.compareSync(password, usuario.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password incorrecto",
      });
    }

    /// generar nuestro JWT

    res.json({ ok: true, uid: usuario._id, name: usuario.name });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }

  res.status(401).json({ ok: true, msg: "login", email, password });
};

const revalidarToken = (req, res = response) => {
  res.json({ ok: true, msg: "renew" });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
