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

DMX.add(500, 50, 1, 0, 255);
DMX.add(550, 50, 1, 255, 0);

DMX.onOff(200, 50, 1);

DMX.export();