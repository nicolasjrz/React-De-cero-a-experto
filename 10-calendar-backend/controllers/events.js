const { response } = require("express");

const newEvent = (req, res = response) => {
  console.log(req.body);
  try {
    res.json({
      ok: true,
      msg: "creado correctamente",
    });
  } catch (error) {
    return res.status(200).json({
      ok: false,
      msg: "error en crear evento",
    });
  }
};

const getEvents = (req, res = response) => {
  try {
    res.status(200).json({
      ok: true,
      msg: "eventos cargados  correctamente",
    });
  } catch (error) {
    return res.status(200).json({
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
    return res.status(200).json({
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
