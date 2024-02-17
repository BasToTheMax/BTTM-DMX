const DMX = require('./api');
const { log } = console;

DMX.setLength(65);

DMX.setColor(1, 2, 255, 255, 255);
DMX.setColor(1, 9, 255, 255, 255);

DMX.add(1, 2, 1, 1, 0)
DMX.add(1, 2, 8, 1, 0)

/*
    API:
    DMX.add(
        start,
        duration,
        channel,
        from,
        to
    )
*/

DMX.setColor(500, 2, 255, 255, 255);
DMX.setColor(500, 9, 255, 255, 255);

DMX.onOff(500, 75, 1); // Your love
DMX.onOff(600, 75, 1); // Your love
DMX.onOff(500, 75, 8); // Your love
DMX.onOff(600, 75, 8); // Your love

DMX.onOff(1500, 100, 1); // Ping
DMX.onOff(1500, 100, 8); // Ping

DMX.onOff(2500, 75, 1); // Your love
DMX.onOff(2600, 75, 1); // Your love
DMX.onOff(2500, 75, 8); // Your love
DMX.onOff(2600, 75, 8); // Your love

DMX.onOff(3400, 100, 1);
DMX.onOff(3400, 100, 8);

DMX.add(4400, 50, 1, 0, 255);
DMX.add(4400, 50, 8, 0, 255);

DMX.setColorFade(5400, 2, 100, 255, 0, 0);
DMX.setColorFade(5400, 9, 100, 0, 0, 255);

DMX.setColorFade(6350, 2, 100,  0,      0,      255);
DMX.setColorFade(6350, 9, 100,  255,    0,      0);

DMX.setColorFade(8300, 2, 100,  255,     0,     0);
DMX.setColorFade(8300, 9, 100,  0,       0,     255);

DMX.setColorFade(10_200, 2, 100,  0,     0,     255);
DMX.setColorFade(10_200, 9, 100,  255,       0,     0);

DMX.add(11_200, 1000, 1, 255, 0) // uit
DMX.add(11_200, 1000, 8, 255, 0) // uit

DMX.add(12_500, 50, 1, 0, 255);
DMX.add(12_500, 50, 8, 0, 255);

var last;

for (let i = 0; i < 75; i++) {
    // DMX.onOff(12_700 + (i*150), 50, 1);
    // DMX.onOff(12_700 + (i*150), 50, 8);

    const isEven = num => ((num % 2) == 0);

    var l1;
    var r1;

    if (isEven(i)) {
        l1 = 255;
        l2 = 0;

        r1 = 0;
        r2 = 255;
     } else {
        l1 = 0;
        l2 = 255;

        r1 = 255;
        r2 = 0;
     }

    DMX.setColorFade(12_700 + (i*150), 2, 100,  l1,     0,     l2);
    DMX.setColorFade(12_700 + (i*150), 9, 100,  r1,       0,     r2);

    last = 12_700 + (i*150);
}

DMX.setColorFade(20_000, 2, 100,  255,     0,     0);
DMX.setColorFade(20_000, 9, 100,  0,       0,     255);

log('Last', last);

DMX.export();
log('> Exported')