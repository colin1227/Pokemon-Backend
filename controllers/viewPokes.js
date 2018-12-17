const express = require("express");
const router = express.Router();
const Pokemon = require("./../models/pokemon");

router.get("/grabPokemon", async(req, res) => {
    try{
    const allPokes = await Pokemon.find();
    res.json({
        data: allPokes,
        status: 200
    });
    }
    catch(err){
        res.json({
            error: err
        });
    };
});

router.post("/baseInjection", async(req, res) => {
    try{
        await Pokemon.insertMany(req.body.pokemon);
        res.json({
            status: 200
        });
    }
    catch(err){
        res.json({
            error: err,
            status: 500
        });
    };
});

router.post("/new-pokemon", async(req, res) => {
    try{
        const newPoke = await Pokemon.create({
            name: req.body.PokeToAddName,
            img: req.body.PokeToAddImg,
            damage: req.body.PokeToAddDamage
        });
        res.json({
            message: `${newPoke.name} added to the game`,
            data: newPoke,
            status: 200
        });
    }
    catch(err){
        res.json({
            error: err,
            status: 500
        });
    };
});

router.post("/update-pokemon", async(req, res) => {
    try{
        const updatedPoke = await Pokemon.findOneAndUpdate(req.body.PokeToEditName,{
            name: req.body.PokeToEditName,
            img: req.body.PokeToEditImg,
            damage: req.body.PokeToEditDamage
        });
        res.json({
            message: `${updatedPoke.name} edit`,
            data: newPoke,
            status: 200
        });
    }
    catch(err){
        res.json({
            error: err,
            status: 500
        });
    };
});

module.exports = router;