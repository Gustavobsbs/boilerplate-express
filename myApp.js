let express = require('express');
let app = express();


//#3

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
})

































 module.exports = app;
