const seed = require("../api/seed/seed.js");
const Libro = require("../api/models/models.js");

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