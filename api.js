var DMX = {};

DMX.length = 0;
DMX.data = [];

DMX.setLength = (le) => DMX.length = le;

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

/*
{
            "start": 1550,
            "duration": 50,
            "from": 255,
            "to": 0,
            "channel": 1
        }
*/

DMX.add = (
    start,
    duration,
    channel,
    from,
    to
) => {
    DMX.data.push({
        start,
        duration,
        channel,
        from,
        to
    });
}

DMX.export = () => {
    require('fs').writeFileSync('./script/1.json', JSON.stringify({
        duration: DMX.length,
        data: DMX.data
    }, null , 2));

    require('./convert');
}

DMX.onOff = (start, duration, channel) => {
    DMX.add(
        start,
        duration,
        channel,
        0,
        255
    );
    DMX.add(
        start + duration,
        duration,
        channel,
        255,
        0
    );
}

DMX.setColor = (start, channel, r, g, b) => {
    DMX.add(start, 1, channel, 0, r);
    DMX.add(start, 1, channel+1, 0, g);
    DMX.add(start, 1, channel+2, 0, b);
}
DMX.setColorFade = (start, channel, duration, r, g, b) => {
    DMX.add(start, duration, channel, 0, r);
    DMX.add(start, duration, channel+1, 0, g);
    DMX.add(start, duration, channel+2, 0, b);
}

module.exports = DMX;