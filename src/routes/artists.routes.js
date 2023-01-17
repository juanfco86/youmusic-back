// import
const express = require("express");
const router = express.Router();

const artistController = require("../controller/artists.controller")


// Rutas de prueba
router.get("/prueba", (req, res) => {
    return res.json({
        mensaje: "hola desde una prueba del back ARTISTS"
    })
});

router.get("/get", artistController.getAllArtists)


module.exports = router;