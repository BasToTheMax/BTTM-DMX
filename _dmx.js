const DMX = require('dmx-ts');

const rand = (min, max) => {
        return Math.round(Math.random() * (max - min)) + min;
}

async function main() {

var dmx = new DMX.DMX()

var driver = new DMX.EnttecOpenUSBDMXDriver('/dev/ttyUSB1', { dmxSpeed: 30 });

var uni = await dmx.addUniverse('mau', driver)

// console.log(uni)

setInterval(() => {
        uni.update({1: 255, 2: rand(0, 100), 3: 50, 4: 255, 8: 255, 9: 255, 10: 0, 11: 0})
}, 1000);

// uni.update({1: 255, 2: 255, 3: 100, 4: 50});
}
main();