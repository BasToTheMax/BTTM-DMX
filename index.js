async function main() {
    const DMX = require('dmx-ts');

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

    const animation = new DMX.Animation().add({
        1: 255,
      }, 500).add({
        1: 0,
      }, 500).runLoop(uni)
      
      
      setTimeout(() => {
        animation.stop()
      }, 5000)
}

main();