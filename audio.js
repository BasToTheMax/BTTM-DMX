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

// DMX.add(500, 2, 2, 0, 255);
// DMX.add(500, 2, 3, 0, 255);
// DMX.add(500, 2, 4, 0, 255);

// DMX.add(500, 50, 1, 0, 255);
// DMX.add(550, 50, 1, 255, 0);

DMX.onOff(500, 50, 1);
DMX.onOff(550, 50, 1);
DMX.onOff(1500, 50, 1);

DMX.export();