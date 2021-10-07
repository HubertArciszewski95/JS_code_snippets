// Return todays date
// Return X days after current date

const todayDate = getDate()
const oneDayAheadFromToday = getDate(1)


// Vanila JS solution
function getDate(daysAheadFromCurrentDate=0) {
    const dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + daysAheadFromCurrentDate);
    
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    
    const output = `${year}-${month}-${day}`
    
    return output;
}


// MomentJS solution
const moment = require('moment');

const todayDate = getDate()
const oneDayAheadFromToday = getDate(1)

function getDate(daysAheadFromCurrentDate=0) {
    return moment().add(daysAheadFromCurrentDate, 'days').format("YYYY-MM-DD");
}
