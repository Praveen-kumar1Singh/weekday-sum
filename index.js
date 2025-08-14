const dayMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function dateToDay(dateStr) {
    return dayMap[new Date(dateStr).getDay()];
}

function solution(D) {
    const result = {};

    for (const [dateStr, value] of Object.entries(D)) {
        const day = dateToDay(dateStr);
        if (!(day in result)) {
            result[day] = 0;
        }
        result[day] += value;
    }

    const orderedDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    for (let i = 0; i < orderedDays.length; i++) {
        const day = orderedDays[i];
        if (!(day in result)) {
            let prev = i - 1;
            while (prev >= 0 && !(orderedDays[prev] in result)) prev--;
            let next = i + 1;
            while (next < orderedDays.length && !(orderedDays[next] in result)) next++;

            if (prev >= 0 && next < orderedDays.length) {
                const avg = Math.floor((result[orderedDays[prev]] + result[orderedDays[next]]) / 2);
                result[day] = avg;
            }
        }
    }

    return result;
}

module.exports = solution;
