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

// console.log(startAt);

var newData;
newData = [];

var DMX;
var rDMX;
rDMX = [];
DMX = [];

for(let i = 0; i <= length; i++) {currentTime
    // log(`> Processing ${i}...`)

    if (!newData[i]) newData[i] = [];

    var needsToStart = startAt[i];
    if (!needsToStart) needsToStart = [];
    if (needsToStart.length > 0) {
        log(`> ${needsToStart.length} start at ${i}`);

        log(needsToStart);
        for(let j = 0; j < needsToStart.length; j++) {
            var item = needsToStart[j];
            log('i', item);
            var durr = item.duration;
            var froms = item.from;
            var tos = item.to;
            var toChange = tos - froms;
            var valPerMS = toChange/durr;

            var channel = item.channel;

            valPerMS = valPerMS;

            if (!DMX[channel]) DMX[channel] = froms;
            if (!rDMX[channel]) rDMX[channel] = froms;

            for(let h = 0; h < durr; h++) {
                rDMX[channel] = rDMX[channel] + valPerMS;
                DMX[channel] = Math.round(rDMX[channel]);

                log(i + h, i, h)

                if (!newData[i + h]) {
                    newData[i + h] = [];
                }
                newData[i + h].push([channel, DMX[channel]]);

                // log(rDMX[channel], DMX[channel], currentTime);
            }

            log(valPerMS, DMX[channel]);
        }
    }

    currentTime++;
}

fs.writeFileSync(`./dmx/${id}.json`, JSON.stringify(newData, null, 2));