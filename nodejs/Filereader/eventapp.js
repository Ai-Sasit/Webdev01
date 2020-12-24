const fs = require('fs');
const rs = fs.createReadStream('./HTML/index.html');

rs.on('open', function () {
  console.log('The file is open');
});

rs.on('close', function () {
    console.log('The file is closed');
});

rs.emit(`close`);
rs.emit(`open`);

var New_Event = function () {
    console.log('Move it now');
  }

const ev = require('events');
const eve = new ev.EventEmitter();

eve.on('go', New_Event);
eve.on('finish',() => {console.log("It's Over")});

eve.emit("go");
eve.emit("finish");