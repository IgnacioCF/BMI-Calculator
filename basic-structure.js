//jshint esversion:6
const express = require("express");
const app = express();
app.get('/', function (req, res) {
    res.send('Hello World!')
  })
// run express with :   npm install express  
// run on browser        http://localhost:3000/
// run :                 nodemon install




app.listen(3000, function(){
    console.log("Server started on port 3000, press Ctrl + C to exit.");
});