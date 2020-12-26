// import giditalClock plugin
const digitalClockMc = require('./digital-clock-mc-v1.0.0');

// save the clock function with country code(i.e. 'en-US', 'Asia/Kolkata')
// to find country code and timezone refer to https://www.iana.org/time-zones
let theclock = digitalClockMc('en-US', 'Asia/Kolkata');

// get the time and date values
const theTime = theclock.time;
const theDay = theclock.date;

// update in interval of 1000ms. or 1sec.
setInterval(function(){
    console.log(theTime());
    console.log(theDay());
}, 1000);
