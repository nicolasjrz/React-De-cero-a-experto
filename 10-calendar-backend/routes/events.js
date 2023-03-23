const express = require("express");
const {
  getEvents,
  newEvent,
  uploadEvent,
  deleteEvent,
} = require("../controllers/events");
const router = express.Router();

router.get("/", getEvents);

router.post("/", newEvent);

router.put("/:id", uploadEvent);

router.delete("/:id", deleteEvent);

module.exports = router;
