const DMX = require('./api');

DMX.setLength(5);

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

DMX.onOff(500, 100, 1);
DMX.onOff(600, 100, 1);
DMX.onOff(1500, 100, 1);

DMX.onOff(3400, 100, 1);
DMX.onOff(3400, 100, 8);

DMX.export();