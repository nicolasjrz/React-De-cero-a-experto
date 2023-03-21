const express = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const router = express.Router();

router.post(
  "/new",
  [
    check("name", "el nombre es obligatirio").not().isEmpty(),
    check("email", "el email es obligatirio").isEmail(),
    check("password", "el password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  crearUsuario
);

router.post(
  "/",
  [
    check("email", "el email es obligatirio").isEmail(),
    check("password", "el password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  loginUsuario
);

router.get("/renew", revalidarToken);

module.exports = router;
