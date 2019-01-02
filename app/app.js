var express = require("express");
var app = express();
var path = require("path");
var request = require("request");
var bodyParser = require("body-parser");
var faker = require("faker");
var loremIpsum = require('lorem-ipsum');

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

const port = 3000

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get('/learnMore', function(req, res){
//Random Photos with Quotes
arrayOfPeopleImages = [];
for (var i=0; i<30; i++){
    var currImgUrl =  faker.image.avatar();
    var personObject = new Object({imageUrl : currImgUrl, fName : faker.name.firstName(), lName : faker.name.lastName(), quote : loremIpsum()});
    console.log(personObject);
    arrayOfPeopleImages[i] = personObject;
}

console.log(faker.company.catchPhrase());
res.render("learnMore", {arrayOfPeopleImages: arrayOfPeopleImages});

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))