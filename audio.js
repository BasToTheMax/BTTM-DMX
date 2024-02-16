const DMX = require('./api');

DMX.setLength(10);

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

DMX.onOff(1500, 100, 1); // Ping

DMX.onOff(2500, 75, 1); // Your love
DMX.onOff(2600, 75, 1); // Your love

DMX.onOff(3400, 100, 1);
DMX.onOff(3400, 100, 8);

DMX.add(4400, 50, 1, 0, 255);
DMX.add(4400, 50, 8, 0, 255);


DMX.setColorFade(6500, 2, 100, 255, 0, 0);
DMX.setColorFade(6500, 9, 100, 0, 0, 255);


DMX.export();