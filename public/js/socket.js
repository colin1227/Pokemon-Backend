socket = io.connect("http://localhost:8000")
socket.on("disconnect", (e)=>{
    socket.emit("disconnection",{
        happend: true
    })
})
console.log("happens")