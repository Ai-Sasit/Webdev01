const fs = require('fs');
fs.stat(`nodeserver.js`, (exists) => {
    console.log("It's Here");
});
console.log("Ready!")
// fs.rename(`nodeserver.js`,`tmp.js`);
// fs.rm('tmp.js');