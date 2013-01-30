//alert("JavaScript works!");
// Matt Harris
// SDI 1301
// 01/31/2013
// mattharris@fullsail.edu
// Project 4 
// Code Library

// String Functions

//Problem 1 Phone Number String

var phoneNumber = function (number) {
        var thisPhone = number;
        var phoneStyle = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        if (phoneStyle.test(thisPhone)) { 
        var correctStyle = thisPhone.replace(phoneStyle, "($1) $2-$3");
            return true; 
        } else {
            return false; 
       }
};

var thisNumber = phoneNumber("231-912-0745");
console.log(thisNumber);

// Problem 2 Email String

var emailAddress = function (email) {
    var myEmail = email
    var addressStyle = (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/);
    if (addressStyle.test(myEmail)) {
      return true;
    } else {
      return false;
    }
};

var thisEmail = emailAddress("mattharris@fullsail.edu");
console.log(thisEmail);

// Problem 3 URL String

var websiteUrl= function(website) {
    var mySite = website
    var siteSyle = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    
    if (mySite.charAt(4) == "s") {
        return true;
    } else if (mySite.charAt(4) == ":") {
        return false;
    }
};

var thisSite = websiteURL ("https://www.fullsail.edu")
console.log(thisSite);

// Problem 4 Upper Case String

var makeUpper = function(name) {
    String.prototype.toUpper = function() {
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    name.toUpper();
    console.log(name.toUpper());
};

makeUpper("matt harris");

// Number Problems

// Problem 1 Format Number

var numberFormat = function(number) {
    var myNumber = number
    myNumber.toFixed(3)
    return console.log(myNumber.toFixed(3))
};

numberFormat(72341.279933);

// Number Problem 3 Date Difference 

var dateSince = function(date) {
    var newYearsDay = date;
    today = new Date(2012, 12, 31);
    var days = 1000*60*60 * 24
    console.log(Math.ceil((today.getTime() - newYearsDay.getTime()) / (days))
    + " days since New Year! " + date)
};

dateSince(new Date(2012, 12, 01));












