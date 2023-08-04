const express = require("express");
const { getTodosLosLibros, getLibroPorID, crearLibro, actualizarLibro, eliminarLibro } = require("../controllers/books.js");
const router = express.Router();

router.get("/libros", getTodosLosLibros)
router.get("/libros/:id", getLibroPorID)
router.post("/libro", crearLibro)
router.put("/libro/:id", actualizarLibro)
router.delete("/libro/:id", eliminarLibro)

module.exports = router