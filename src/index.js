require("./config/db");
require("./config/populateDB")

const express = require("express");
const app = express();
const Libro = require("./api/models/models")

app.use(express.json());

const booksRouter = require("./api/routes/books.js")
app.use("/", booksRouter);

app.use('*', (req, res, next) => {
  res.status(404).json({ data: 'Página no encontrada' })
})

app.use((error, req, res, next) => {
  res.status(500).json({ data: 'Error interno del servidor' })
})

const PORT = 4001;
app.listen(PORT, () => {
  console.log(
    `Servidor escuchando en el puerto ${PORT}: http://127.0.0.1:${PORT}`
  );
});
