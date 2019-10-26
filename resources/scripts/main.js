console.log('starting main.js, right on up......');

const fs = require('fs');
const os = require('os');
// const notes = require('./notes.js');//relative path to notes file

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello  ${user.username} !`, function (err) {
    if(err) {
        console.log('Unable to write to file');
   
    }
});