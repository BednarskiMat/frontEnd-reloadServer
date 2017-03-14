var express = require('express');


//create our app
var app = express();

// declares the folder that express "serves"
app.use(express.static('public'));


// set the port the server will run on
app.listen(3000);

// just a friendly message to run in the terminal that lets us know what port it is running on

console.log("Server running on port 3000");
console.log("to acces site, navigate to: 'localhost:3000'");
