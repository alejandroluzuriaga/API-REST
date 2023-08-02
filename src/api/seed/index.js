const seed = require("./seed.js");
const Libro = require("../models.js");

const main = async () => {
  await Libro.collection.drop();
  await Libro.insertMany(seed.libros);
};

main()
  .then(() => {
    // process.exit();
  })
  .catch((err) => {
    console.log("Error lanzando script!", err);
    process.exit(1);
  });
