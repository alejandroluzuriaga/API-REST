require("./config/db");

const mongoose = require('mongoose');
const seed = require("./seed.js");
const Libro = require('./models')


const express = require('express');
const app = express();
const PORT = 4001;


const main = async () => {
    await Libro.collection.drop()
    await Libro.insertMany(seed.libros);
};

main()
  .then(() => {
    process.exit()
})
  .catch((err) =>{
    console.log("Error lanzando script!", err)
    process.exit(1)
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}: http://localhost:${PORT}`);
});
