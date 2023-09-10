document.addEventListener('DOMContentLoaded', function() {
    const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]');
    const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // Get the current date and time
    const now = new Date();


    // Set current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    currentDayOfTheWeekElement.textContent = `Current (day) ${dayOfWeek}`;

    // Set current UTC time
    currentUTCTimeElement.textContent = `Current (Time) ` + now.getTime() + "s";
});