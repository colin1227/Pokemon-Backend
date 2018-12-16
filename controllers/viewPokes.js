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
        console.log("asdf1234")
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
            name: req.body.name,
            img: req.body.img,
            damage: req.body.damage
        });
        console.log(newPoke);
        res.json({
            message: `${req.body.name} added to the game`,
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
        const newPoke = await Pokemon.findOneAndUpdate(req.body.name,{
            name: req.body.name,
            img: req.body.img,
            damage: req.body.damage
        });
        console.log(newPoke);
        res.json({
            message: `${req.body.name} edit`,
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