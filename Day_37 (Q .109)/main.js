"use strict";
// Get the current date
const currentDate = new Date();
// Get the current hour from the date
const currentHour = currentDate.getHours();
// Check if the current hour is before 12 PM
if (currentHour < 12) {
    // If it is, log "Good Morning"
    console.log("Good Morning");
}
