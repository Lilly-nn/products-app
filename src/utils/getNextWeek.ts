export function getNextWeekInSeconds() {
    var now = new Date()
    var dayDiff = 7 - now.getDay();
    var startOfNextWeek = new Date(now.valueOf());
    startOfNextWeek.setDate(now.getDate() + dayDiff);
    startOfNextWeek.setHours(0);
    startOfNextWeek.setMinutes(0);
    startOfNextWeek.setSeconds(0);
    return Math.floor((startOfNextWeek.valueOf() - now.valueOf()) / 1000);
}