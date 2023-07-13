//.................................toIsoString().................................//
// let date = new Date();
// console.log(date.toISOString());  
//it is same as normal date format. If we do not mention it does not matter because there is no difference between this date and normal date format. 
//Format : YYYY-MM-DD hh:mm:ss 

//................................toLocaleString()..............................//
// let date = new Date();
// var options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
// console.log(date.toLocaleString('en-US',options)); //Thursday, July 13, 2023
// console.log(date.toLocaleString('en-US')); //7/13/2023, 10:43:44 AM
// console.log(date.toLocaleString('hi-IN',options)); //गुरुवार, 13 जुलाई 2023
// console.log(date.toLocaleTimeString('en-US',options)); //Thursday, July 13, 2023 at 10:43:44 AM
// console.log(date.toLocaleDateString('en-US')); //7/13/2023
// console.log(date.toLocaleDateString('en-US',options)) //Thursday, July 13, 2023

// => check whether two dates fall on the same day
function isSame(yearStr, dayStr) {
    let year = new Date(yearStr);
    let day = new Date(dayStr);
    return (
        year.getFullYear() === day.getFullYear() &&
        year.getMonth() === day.getMonth() &&
        year.getDate() === day.getDate()
    );
}
console.log(isSame("2023,02,18", "2004,02,18"));
