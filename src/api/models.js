const mongoose = require("mongoose");

const emptySchema = new mongoose.Schema({});

const Libro = mongoose.model("Libro", emptySchema);

module.exports = Libro;
