const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
const PORT = 3006;
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://Sridurga:form123@applicant-data.pf1zofi.mongodb.net/?retryWrites=true&w=majorityy"

let db;
let detailsDb;
mongoClient.connect(url, function (err, client) {
  if (err) {
    console.log(err);
  } else {
    db = client.db("applicant");
    detailsDb = db.collection("applicant");
    app.set("detailsCollection", detailsDb);
    console.log("connected to db");
  }
});
app.get("/", function (req, res) {
  let { body, params, query } = req;
  console.log("path:", req.url);
  console.log("params:", params);
  console.log("body:", body);
  console.log("query:", query);
  res.send("Welcome to Home page");
});
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

let application = require("./applicant_data/addDetails");
app.use("/application",application);
app.listen(PORT, function(err,res){
    if (err) throw err;
    else console.log(`Application is started running on ; ${PORT}...`);
})