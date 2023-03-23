const express = require("express");
const {
  getEvents,
  newEvent,
  uploadEvent,
  deleteEvent,
} = require("../controllers/events");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = express.Router();

router.use(validarJWT);

/**
 *
 * Events routes
 * /api/event
 */

router.get("/", getEvents);

router.post("/", newEvent);

router.put("/:id", uploadEvent);

router.delete("/:id", deleteEvent);

module.exports = router;
