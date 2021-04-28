const express = require("express");
const router = express.Router();
const { User } = require("../db/models");
const jwt = require('jsonwebtoken');
const secret = 'Plataforma5omdb'; 


router.post("/", (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({where: {email}})
    .then((user) => {
        if(!user){
            return res.status(401).send("Invalid credentials")
        }
        if(!user.validPassword(password)){
            return res.status(401).send("Invalid credentials")
        }
        const token = jwt.sign({id: user.id}, secret)
        
        return res.status(200).send({ token })
    })
})

router.get("/", (req, res, next) => {
    res.status(200).send("en ruta login")
})

module.exports = router