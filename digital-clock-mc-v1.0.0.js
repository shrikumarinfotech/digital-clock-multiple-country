/**
 * Name: Digital Clock Multi Country
 * Description: Display Digital clock for various countries in JavaScript
 * Author: Shrikumar Infotech
 * Author URI: dev@shrikumarinfotech.com
 * License: GPLv2.0 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

'use strict';

// Define digital clock function(theLocale: String, theTimeZone: String)
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
    console.log(locale);
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

    
    return {
        time: function(){
            return (new Intl.DateTimeFormat(locale, optionsTime).format(new Date()));
        },
        date: function(){
            return (new Intl.DateTimeFormat(locale, optionsDate).format(new Date()));
        }
    };

    // return (new Intl.DateTimeFormat('en-US', optionsTime).format(datetime));

};

module.exports = digitalClock;