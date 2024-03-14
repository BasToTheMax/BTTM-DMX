const DMX = require('dmx-ts');

async function main() {
    var conf = {
        port: 3000,
        path: '/dev/ttyUSB0'
    };

    var dmx = new DMX.DMX()

    var driver;
    console.log(process.cwd())    
    if (process.cwd().toString().startsWith('/workspaces')) {
        driver = new DMX.NullDriver();
    } else {
        driver = new DMX.EnttecOpenUSBDMXDriver(conf.path, { dmxSpeed: 30 });
    }

    var uni = await dmx.addUniverse('bttm', driver);

    uni.update({
        2: 52,
        3: 146,
        4: 235
    });

    const ArtNet = require('artnode').ArtNet;

    console.log(ArtNet);
 
    const artnet = new ArtNet({isController: true});
    
    const universe = artnet.getUniverse(0);
    
    universe.on('data', ({ data, changed }) => {
        changed.forEach(({ address, value }) => {
            console.log(`DMX ${address} set to ${value}.`);

            var toUp;
            toUp = {};
            toUp[address+1] = value;
            uni.update(toUp);
        });
        
        data.forEach((value, address) => {
            console.log(`DMX ${address} is ${value}`);
        });
    });
    
    artnet.start();

    // setInterval(() => {
    //     blink(uni, 1, 500);
    // }, 1000);
}

function blink(uni, light, dur) {
    const ani = new DMX.Animation();
    // uni.update({ 1: 0 })
    ani.add({
        1: 0,
    }, dur);
    ani.add({
        1: 255,
    }, dur);
    ani.add({
        1: 0,
    }, dur);

    ani.run(uni);
}

main();