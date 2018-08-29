"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var composers = [
    { id: 6, firstName: "Thomas", lastName: "Morley" },
    { id: 7, firstName: "Claudio", lastName: "Monteverdi" },
    { id: 8, firstName: "Luca", lastName: "Marenzio" },
    { id: 9, firstName: "Jacques", lastName: "Arcadelt" },
    { id: 3, firstName: "Orlando", lastName: "Gibbons" },
];
function getComposers() {
    return composers;
}
app.get('/', function (request, response) {
    response.send('The URL for composers is http://localhost:3000/api/composers');
});
function getComposerById(composerId) {
    return composers.find(function (c) { return c.id == composerId; });
}
app.get('/api/composer/:id', function (request, response) {
    response.json(getComposerById(request.params.id));
});
var server = app.listen(3000, "localhost", function () {
    console.log("Listening on port 3000");
});
//# sourceMappingURL=app.js.map