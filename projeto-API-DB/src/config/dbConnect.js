const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://caroliinaasilva_:Carolzinha1.@cluster0.sprzi.mongodb.net/reprograma");

let db = mongoose.connection;

module.exports = db;

