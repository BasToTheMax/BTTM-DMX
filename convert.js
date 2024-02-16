var fs = require('fs');
var { log } = console;

var id = 1;
var path = `./script/${id}.json`;

if (!fs.existsSync(path)) {
    log('> ID not found');
    process.exit(1);
}

var data = JSON.parse(fs.readFileSync(path).toString());

var currentTime;
currentTime = 0;

var length = data.duration * 1000;

var startAt;
startAt = {};

for(let i = 0; i < data.data.length; i++) {
    log(`> A ${i}...`);
    var a = data.data[i].start;
    if (!startAt[a]) startAt[a] = [];

    startAt[a].push(data.data[i]);
}

console.log(startAt);

for(let i = 0; i <= length; i++) {
    // log(`> Processing ${i}...`)
    var needsToStart = startAt[i];
    if (!needsToStart) needsToStart = [];
    if (needsToStart.length > 0) {
        log(`> ${needsToStart.length} start at ${i}`)
    }
}