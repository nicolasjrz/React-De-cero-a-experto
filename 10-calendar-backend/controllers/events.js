const { response } = require("express");
const { populate } = require("../models/Event");

const Event = require("../models/Event");

const newEvent = async (req, res = response) => {
  const evento = new Event(req.body);

  try {
    evento.user = req.uid;
    const eventSave = await evento.save();

    res.status(201).json({ ok: true, evento: eventSave });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "error en crear evento",
    });
  }
};

const getEvents = async (req, res = response) => {
  const eventos = await Event.find().populate("user", "name");
  try {
    res.status(200).json({
      ok: true,
      msg: "eventos cargados  correctamente",
      eventos: eventos,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "error en mostrar eventos",
    });
  }
};

const uploadEvent = (req, res = response) => {
  try {
    res.status(200).json({
      ok: true,
      msg: " evento actualizado correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "error en actualizar evento",
    });
  }
};

const deleteEvent = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "evento eliminado correctamente",
  });

  try {
  } catch (error) {
    return res.status(200).json({
      ok: false,
      msg: "error al eliminar evento",
    });
  }
};

module.exports = {
  newEvent,
  getEvents,
  uploadEvent,
  deleteEvent,
};
