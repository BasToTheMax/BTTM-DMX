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
DMX.onOff(700, 75, 1); // Your love
DMX.onOff(500, 75, 8); // Your love
DMX.onOff(700, 75, 8); // Your love

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

    var t = 100;

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

    DMX.setColorFade(12_700 + (i*t), 2, 100,  l1,     0,     l2);
    DMX.setColorFade(12_700 + (i*t), 9, 100,  r1,       0,     r2);

    last = 12_700 + (i*t);
}

log('last', last)

for (let i = 0; i < 65; i++) {
    // DMX.onOff(12_700 + (i*150), 50, 1);
    // DMX.onOff(12_700 + (i*150), 50, 8);

    var t = 100;

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

    DMX.setColorFade(20_100 + (i*t), 2, 100,  l1,     l2,     0);
    DMX.setColorFade(20_100 + (i*t), 9, 100,  r1,       r2,     0);

    last = 20_100 + (i*t);
}


log('Last2', last);

DMX.add(26_000, 1000, 1, 255, 0); // Stop when off
DMX.add(26_000, 1000, 8, 255, 0); // Stop whem off

DMX.setColor(26_000, 2, 255, 255, 255);
DMX.setColor(26_000, 9, 255, 255, 255);

DMX.add(26_000, 1000, 1, 0, 255); // Stop when off
DMX.add(27_000, 100, 8, 9, 255); // Stop whem off

DMX.export();
log('> Exported')