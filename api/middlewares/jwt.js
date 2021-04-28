const jwt = require("jsonwebtoken");
const secret = 'Plataforma5omdb'; 

const checkJWT = (req, res, next) => {
    if(!req.headers.authorization) return res.status(401).send("Unauthorized");
    
    const token = req.headers.authorization.split(" ")[1];
    const dataPayload = jwt.verify(token, secret)
    
    if(dataPayload){
        req.user = dataPayload;
        next();
    }
}

module.exports = checkJWT;