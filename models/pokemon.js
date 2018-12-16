const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    name: String,
    img: {type: String, required: true},
    damage: {type: Number, required: true}
})

module.exports = mongoose.model('Pokemon', pokemonSchema);