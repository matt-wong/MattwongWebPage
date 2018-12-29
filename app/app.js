var express = require("express");
var app = express();
var path = require("path");
var request = require("request");
var bodyParser = require("body-parser");
var faker = require("faker")

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
    let personImage = faker.image.avatar();
    console.log(personImage);
    arrayOfPeopleImages[i] = personImage;
}

console.log(faker.company.catchPhrase());
res.render("learnMore", {arrayOfPeopleImages: arrayOfPeopleImages});

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))