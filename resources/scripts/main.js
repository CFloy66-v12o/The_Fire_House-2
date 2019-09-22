var firstName = prompt("Please enter your first name.");
var firstChar = firstName.slice(0,1).toUpperCase();
var restOfChar = firstName.slice(1,20).toLowerCase();
alert("Hello " + firstChar + restOfChar + ", welcome home!");