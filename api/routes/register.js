const express = require("express");
const router = express.Router();
const { User } = require("../db/models");

router.post("/", (req, res, next) => {
    User.create(req.body)
    .then((user) => {
    res.status(201).send(user)
    })
    .catch(next);
});
    
module.exports = router