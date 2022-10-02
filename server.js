require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const cors = require('cors');
app.set("view engine","ejs");

let db;
let client = new MongoClient("mongodb+srv://doadmin:QqIJSz763s42G509@db-mongodb-nyc1-45406-08357d8a.mongo.ondigitalocean.com/admin?tls=true&authSource=admin");
app.use(cors());
//app.use(express.json);
client.connect().then((client) => {
    db = client.db("questions");
});

app.get("/response", async (req,res) => {
    res.json(await db.collection("questions").find().toArray()); //normally res.json()
});

app.listen("8000")
