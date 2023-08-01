require("./config/db");

const mongoose = require('mongoose');


const express = require('express');
const app = express();
const PORT = 4001;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}: http://localhost:${PORT}`);
});
