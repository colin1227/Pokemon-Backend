const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/pokemonBattle";

mongoose.connect(connectionString, {useNewUrlParser: true});

mongoose.connection.on("connected",() => {
     console.log(`Mongoose connected to ${connectionString}, on sever 27017`)});

mongoose.connection.on("disconnected",() => console.log("mongoose disconnected"));

mongoose.connection.on("error", (err) => console.log("Mongoose Error", err));