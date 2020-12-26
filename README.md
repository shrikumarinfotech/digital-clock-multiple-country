# Clock Plugin for multiple countries
This is a clock plugin made with JavaScript that displays clock in your local time zone.

# Usage

```
// Import giditalClock plugin
const digitalClockMc = require('./digital-clock-mc-v1.0.0');

// Save the clock function with country code(i.e. 'en-US', 'Asia/Kolkata')
// To find locale and timezone refer to https://www.iana.org/time-zones
let theclock = digitalClockMc('en-US', 'Asia/Kolkata');

// Get the time and date values
const theTime = theclock.time;
const theDay = theclock.date;

// Update in interval of 1000ms. or 1sec.
setInterval(function(){
    console.log(theTime());
    console.log(theDay());
}, 1000);
```
## HTML Script tag usage

Include this CSS file in your HTML `<head></head>`:
```
<link rel="stylesheet" href="./includes/stylesheets/digital-clock-mc-v1.0.0.css">
```

Use this before your HTML file `</body>` tag:
```
<script src="./includes/javascripts/jquery-3.5.1.min.js"></script>
<script src="digital-clock-mc-proto-v1.0.0.js"></script>
```

Sample HTML file(under root directory):
```
index.html
```

# Live URL
https://shrikumarinfotech.github.io/digital-clock-multiple-country/