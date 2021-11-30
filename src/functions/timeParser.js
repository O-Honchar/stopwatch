function timeParser(secCount) {
    const time = {
        HH: '00',
        MM: '00',
        SS: '00'
    };

    const seconds = (secCount % 60);
    const minutes = Math.floor(secCount / 60 - 60 * Math.floor(secCount / 3600));
    const hours = Math.floor(secCount / 3600);

    time.HH = (hours < 1)
                ? '00'
                : (hours > 0 && hours < 10)
                    ? `0${hours}`
                    : `${hours}`;
    time.MM = (minutes < 1)
                ? '00'
                : (minutes > 0 && minutes < 10)
                    ? `0${minutes}`
                    : `${minutes}`;
    time.SS = (seconds < 10)
                ? `0${seconds}`
                : `${seconds}`;

    return time;
};

export default timeParser;
