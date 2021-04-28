const morgan = require("morgan");
const express = require("express");
var cors = require('cors')

const routes = require("./routes");
const db = require("./db");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use("/api", routes);


app.use((err, req, res, next) => {
  console.error("Get to middleware error", err);
  res.status(500).send(err);
});


db.sync({force:false})
.then(() => {
 app.listen(8080, () => {
    console.log("Listening in port 8080");
  });})