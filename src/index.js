require("./config/db");
require("./config/populateDB")

const express = require("express");
const app = express();
const Libro = require("./api/models/models")

app.use(express.json());

const booksRouter = require("./api/routes/books.js")
app.use("/", booksRouter);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(
    `Servidor escuchando en el puerto ${PORT}: http://127.0.0.1:${PORT}`
  );
});
