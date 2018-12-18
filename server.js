const express = require("express");
// const socket = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
require("dotenv").config();
require("./db/db.js")

const whitelist = ["https://adoring-joliot-0f8029.netlify.com","http://localhost:3000"]

const corsOptions = {
    origin: function(origin, callback){
        if (whitelist.indexOf(origin) !== -1){
            callback(null, true)
        }
        else {
            return false;
        }
    },
    optionsSuccess: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

const viewController = require("./controllers/viewPokes");
const gameController = require("./controllers/game");
app.use("/game", gameController);
app.use("/crud", viewController);


const server = app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

// const io = socket(server);
// let ids = [];
// io.on("connection", (socket) =>{
//     ids.push(socket.id)
//     console.log('made socket connection', socket.id)
//     socket.on("disconnect", () => {
//         ids.filter(id => id === socket.id)
//         console.log(`${socket.id} left`)
// })
// })

app.get("/", (req, res) =>{
     res.json({
         data: "you shouldn't be seeing this"
     })
})