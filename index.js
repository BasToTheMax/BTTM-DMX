const DMX = require('dmx-ts');

async function main() {
    var conf = {
        port: 3000,
        path: '/dev/ttyUSB0'
    };

    var dmx = new DMX.DMX()

    var driver = new DMX.EnttecOpenUSBDMXDriver(conf.path, { dmxSpeed: 40 });

    var uni = await dmx.addUniverse('bttm', driver);

    uni.update({
        1: 255,
        2: 100,
        3: 0,
        4: 255
    });

    setInterval(() => {
        blink(uni, 1, 1000);
    }, 2500);
}

function blink(uni, light, dur) {
    const ani = new DMX.Animation()
    ani.add({
        light: 255,
    }, dur);
    ani.add({
        light: 0,
    }, dur);

    ani.run(uni);
}

main();