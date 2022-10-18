export const subscribeClock = (onUpdate) => {
    const currentDateTime = new Date();
    let clockRef = setTimeout(() => {
        onUpdate(new Date());
        clockRef = setInterval(() => onUpdate(new Date()), 1000 * 60);
    }, (60 - currentDateTime.getSeconds()) * 1000);
    return clockRef;
}

export const unsubscribeClock = (clockRef) => {
    clearInterval(clockRef);
}

export const formatDateTime = (dateTime, dateOptions, timeOptions) => {
    const time = dateTime.toLocaleTimeString([], timeOptions);
    const date = dateTime.toLocaleTimeString([], dateOptions);
    return {
        date,
        time: timeOptions.hour12suffix ? time : time.replace('AM', '').replace('PM', '')
    };
};