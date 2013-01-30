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
