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
    }));

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

module.exports = DMX;