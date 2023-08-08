const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({
  name: String,
  autor: String,
  anio_publicacion: Number,
  genero: String
});

const Libro = mongoose.model("Libro", libroSchema);

module.exports = Libro;
