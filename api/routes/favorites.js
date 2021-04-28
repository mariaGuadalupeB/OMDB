const express = require("express");
const router = express.Router();
const checkJWT = require("../middlewares/jwt")

router.get("/", checkJWT ,(req, res, next) => {
   res.send("Ruta Favoritos")
    
})

module.exports = router