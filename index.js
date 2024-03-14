const DMX = require('dmx-ts');

async function main() {
    var conf = {
        port: 3000,
        path: '/dev/ttyUSB0'
    };

    var dmx = new DMX.DMX()

    var driver = new DMX.EnttecOpenUSBDMXDriver(conf.path, { dmxSpeed: 30 });

    var uni = await dmx.addUniverse('bttm', driver);

    // uni.update({
    //     1: 255,
    //     2: 100,
    //     3: 0,
    //     4: 255
    // });

    setInterval(() => {
        blink(uni, 1, 500);
    }, 1000);
}

function blink(uni, light, dur) {
    const ani = new DMX.Animation();
    uni.update({ 1: 0 })
    ani.add({
        1: 0,
    }, dur);
    ani.add({
        1: 255,
    }, dur);

    ani.run(uni);
}

main();