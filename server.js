var express = require('express');
var app = express();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "December"];

var object = {};

app.get('/:date', (req,res) => {
    var date = req.params.date;
    isNumber(date) ? res.send(unixToDate(parseInt(date))) : res.send(stringToDate(date));
});

app.listen(8080, function() {
    console.log('Server start listening on port 8080');
});

function unixToDate(unixDate) {
    var object = {};
    object.unix = unixDate;
    var newDate = new Date(unixDate*1000);
    
    object.natural = months[newDate.getMonth()] + " " + newDate.getDate() + ", " + newDate.getFullYear();
    
    return object;
}

function stringToDate(date) {
    var object = {};
    object.unix = Date.parse(date)/1000;
    
    if(!object.unix) object.natural = null;
    else object.natural = date;
    
    return object;
}

function isNumber(check) {
    if(/^[0-9]+$/.test(check)) return true;
    else return false;
}