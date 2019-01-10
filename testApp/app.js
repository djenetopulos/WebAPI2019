//  how to require middleware from npm
var http = require("http");
var Mustache = require("mustache");
var randomNum = require("./randomNumber");
//  filling strings with json type stuff.
var message = Mustache.render("Ayyy, {{firstname}} {{lastname}}, whatup Boiiii?", {firstname:"Jordan", lastname:"Dubreuil"});

//  handle incoming HTTP requests
function reqHandler(req, res)
{
    console.log("We have a server request from " + req.url);
    if(req.url === "/")
    {
            res.end("Wilkommen!  Bis Bald!");
    }
    else if(req.url === "/aboot")
    {
        res.end("This is the story of a man; one who was never at a loss");
    }
    else if(req.url === "/contact")
    {
        res.end(message + "\n" + randomNum());
    }
    else
    {
        res.end("it's not nowhere.  it's just not anywhere.");
    }
}

//  output the message
console.log(message);
console.log(randomNum());

//  create and start the server
var server = http.createServer(reqHandler);

//  starts the server
server.listen(3000);
