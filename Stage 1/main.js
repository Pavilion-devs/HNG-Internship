//"Current Day 
const DayofWeek = document.querySelector('[data-testid="currentDayOftheWeek"]');
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", ""];
const currentDate = new Date();

const currentDayofWeek = daysOfWeek[currentDate.getDay()];
DayofWeek.textContent = `Current (Day) ${currentDayofWeek}`;


//Current Time (UTC)"
const currentUtcTime = document.querySelector('[data-testid="currentUTCTime"]');

const currentTime = Date.now()

currentUtcTime.textContent = `Time (UTC) ${currentTime}s`;

