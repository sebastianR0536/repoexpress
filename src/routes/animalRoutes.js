const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/animal");
//Nuevo animal
router.post("/animals", (req, res) => {
    const animal = animalSchema(req.body);
    animal
        .save() //guardar
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
//CONSULTAR TODOS LOS ANIMALES
router.get("/animals", (req, res) => {
    animalSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});