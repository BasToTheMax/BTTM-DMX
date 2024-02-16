const DMX = require('./api');

DMX.setLength(15);

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

// DMX.add(500, 2, 2, 0, 255);
// DMX.add(500, 2, 3, 0, 255);
// DMX.add(500, 2, 4, 0, 255);

// DMX.add(500, 50, 1, 0, 255);
// DMX.add(550, 50, 1, 255, 0);

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

DMX.setColorFade(8400, 2, 100,  255,     0,     0);
DMX.setColorFade(8400, 9, 100,  0,       0,     255);

DMX.setColorFade(10_200, 2, 100,  0,     0,     255);
DMX.setColorFade(10_200, 9, 100,  255,       0,     0);

DMX.add(11_200, 1000, 1, 255, 0) // uit
DMX.add(11_200, 1000, 8, 255, 0) // uit

DMX.add(12_500, 50, 1, 0, 255)
DMX.add(12_500, 50, 8, 0, 255)

for (let i = 0; i < 20; i++) {
    DMX.setColorFade(12_600 + (i*100), 2, 100,  255,     0,     0);
    DMX.setColorFade(12_600 + (i*100), 9, 100,  0,       0,     255);

    DMX.setColorFade(12_700 + (i*100), 2, 100,  0,     0,     255);
    DMX.setColorFade(12_700 + (i*100), 9, 100,  255,       0,     0);
}

// DMX.setColorFade(12_600, 2, 100,  255,     0,     0);
// DMX.setColorFade(12_600, 9, 100,  0,       0,     255);

// DMX.setColorFade(12_700, 2, 100,  0,     0,     255);
// DMX.setColorFade(12_700, 9, 100,  255,       0,     0);

// DMX.setColorFade(12_800, 2, 100,  255,     0,     0);
// DMX.setColorFade(12_800, 9, 100,  0,       0,     255);

// DMX.setColorFade(12_900, 2, 100,  0,     0,     255);
// DMX.setColorFade(12_900, 9, 100,  255,       0,     0);


DMX.export();