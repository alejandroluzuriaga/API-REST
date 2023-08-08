const Libro = require("../models/models.js")

const getTodosLosLibros = async (req, res) => {
    try {
      const libros = await Libro.find().lean();
  
      if (!libros) {
        return res.status(404).json({ error: "No hay libros en la BD" });
      }
  
      res.status(200).json({ data: libros });
    } catch (err) {
      console.log("API error:", err);
      res.status(500).json({ data: "Unexpected server error" });
    }
  };
  
  const getLibroPorID = async (req, res) => {
    try {
      const { id } = req.params;
      const libro = await Libro.findById(id);
      if (!libro) {
        return res.status(404).json({ error: "No existe este libro en la BD" });
      }
      res.status(200).json({ data: libro });
    } catch (err) {
      console.log("API error:", err);
      res.status(500).json({ data: "Unexpected server error" });
    }
  };
  
  const crearLibro = async (req, res) => {
    try {
      const { name, autor, anio_publicacion, genero } = req.body;
      const libro = new Libro({
        name,
        autor,
        anio_publicacion,
        genero,
      });
  
      await libro.save();
  
      res.status(201).json({ data: libro });
    } catch (err) {
      console.log("API error:", err);
      res.status(500).json({ error: "Unexpected server error" });
    }
  }   
  
  const actualizarLibro = async (req, res) => {
    const { id } = req.params;
    const { name, autor, anio_publicacion, genero } = req.body;
  
    try {
      const actualizacion = {};
      if (name !== undefined) actualizacion.name = name; // Usar 'name' en lugar de 'titulo'
      if (autor !== undefined) actualizacion.autor = autor;
      if (anio_publicacion !== undefined)
        actualizacion.anio_publicacion = anio_publicacion;
      if (genero !== undefined) actualizacion.genero = genero;
  
      if (Object.keys(actualizacion).length === 0) {
        return res
          .status(400)
          .json({ error: "No se proporcionaron campos para actualizar" });
      }
  
      const libroActualizado = await Libro.findByIdAndUpdate(id, actualizacion, {
        new: true,
      });
  
      if (!libroActualizado) {
        return res.status(404).json({ error: "Libro no encontrado" });
      }
  
      res.status(200).json({ data: libroActualizado });
    } catch (err) {
      console.log("API error:", err);
      res.status(500).json({ error: "Unexpected server error" });
    }
  };
  
  const eliminarLibro = async (req, res) => {
    const { id } = req.params;
    try {
      const libro = await Libro.findById(id);
  
      if (!libro) {
        return res.status(404).json({ error: "No hay libros en la BD" });
      } else {
        await Libro.deleteOne({ _id: id });
        return res.status(200).json({ data: `Libro borrado: ${id}` });
      }
    } catch (err) {
      console.log("API error:", err);
      res.status(500).json({ data: "Unexpected server error" });
    }
  };

  module.exports = {
    getTodosLosLibros,
    getLibroPorID,
    crearLibro,
    actualizarLibro,
    eliminarLibro
  }