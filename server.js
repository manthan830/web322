/***************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: __Manthan Hasmukhlal Barot_____ Student ID: __133247213____ Date: _03/10/2022_____
*
* Online (Heroku) URL: ___https://whispering-shelf-23838.herokuapp.com/________________
*
****************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Manthan Barot- 133247213");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);