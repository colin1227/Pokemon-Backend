const express = require("express");
// const socket = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
require("./db/db.js")

const corsOptions = {
    origin: "http://localhost:3000",
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


const server = app.listen(port, (err)=>{
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
     res.render("homePage.ejs")
})