/**
 * Name: Digital Clock(HTML Prototype) Multi Country
 * Description: Display Digital clock for various countries in JavaScript
 * Author: Shrikumar Infotech
 * Author URI: dev@shrikumarinfotech.com
 * License: GPLv2.0 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

// use strict mode
'use strict';

$(document).ready(function(){
    // Define clock loop/refresh/update variable
    let testLoop = {}; // an empty object

    // Define the form
    const timezoneForm = $('#time-zone');
    // Define function for form submission
    // let newTimeZone;
    timezoneForm.on('submit', function(e){
        e.preventDefault();

        // Define and filter the data
        const regxForwardSlash = /(?:%2F)/gi;
        const regxReplacePrefix = /(?:timezone=)/gi;
        const timeZone = timezoneForm.serialize().replace(regxForwardSlash, '/').replace(regxReplacePrefix, '');

        // Clear current clock
        clearInterval(testLoop);
        // Display updated clock
        displayTheClock('en-US', timeZone);

    });

    // Initiate digitalClock function(theLocale: String, theTimeZone: String)
    const digitalClock = function(theLocale, theTimeZone){
        // define options
        // Default language
        let locale = 'en-US';
        // Check for input parameters(if provided)
        if(theLocale !== undefined || theLocale !== '' || theLocale !== null){
            locale = theLocale;
        }
        // Default country code
        let timezone = 'Asia/Kolkata';
        // Check for input parameters(if provided)
        if(theTimeZone !== undefined || theTimeZone !== '' || theTimeZone !== null){
            timezone = theTimeZone;
        }
        // console.log(locale);
        // console.log(timezone);
        // option time
        const optionsTime = {
            timeZone: timezone,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false
        }
        // option date
        const optionsDate = {
            timeZone: timezone,
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        // option timezone
        const optionsTimeZone = {
            timeZone: timezone,
            timeZoneName: 'long'
        };
        // option timezone short
        const optionsTimeZoneShort = {
            timeZone: timezone,
            timeZoneName: 'short'
        };

        // return the clock object
        return {
            time: function(){
                return (new Intl.DateTimeFormat(locale, optionsTime).format(new Date()));
            },
            date: function(){
                return (new Intl.DateTimeFormat(locale, optionsDate).format(new Date()));
            },
            timezone: function(){
                return (new Intl.DateTimeFormat(locale, optionsTimeZone).format(new Date()));
            },
            timezoneshort: function(){
                return (new Intl.DateTimeFormat(locale, optionsTimeZoneShort).format(new Date()));
            }
        };
    };

    
    // Define function to display the clock
    function displayTheClock(x, y){ // x is locale, y is timezone
        // Define the clock
        let theclock = digitalClock(x, y); // x is locale, y is timezone

        // get the time and date
        const theTime = theclock.time;
        const theDay = theclock.date;
        const theTimeZone = theclock.timezone;
        const timezoneShort = theclock.timezoneshort;

        // get the display DOM elements
        const displayTimeObject = document.getElementById('display-time');
        const displayDateObject = document.getElementById('display-date');
        const displayTimeZoneObject = document.getElementById('display-timezone');
        const displayTimeZoneShortObject = document.getElementById('display-timezoneshort');

        // display time
        displayTimeZoneObject.innerHTML = theTimeZone();
        displayTimeZoneShortObject.innerHTML = timezoneShort();
        // clock update
        testLoop = setInterval(function(){
            displayTimeObject.innerHTML = theTime();
            displayDateObject.innerHTML = theDay();
        }, 100); // interval is 1second

    }
    displayTheClock(); // run on page load

});

