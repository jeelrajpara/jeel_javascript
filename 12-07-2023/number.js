//.......................................Number methods...............................//
//.......................................parseInt()...................................//
// console.log(parseInt("10")); //10
// console.log(parseInt("12.45"));  //12
// console.log(parseInt("12",8));  //10
// console.log(parseInt("12 years")); //12
// console.log(parseInt("years 12")); //NaN
// console.log(parseInt("null"))  //NaN
// console.log(parseInt("")); //NaN
// console.log(parseInt("undefined")) //NaN
// console.log(parseInt("12",8));  //10 converts 12 to decimal
// console.log(parseInt("12",16));  //18 converts 12 to hexadecimal
// console.log(parseInt("0x12"));   //takes 12 ans converts it to hexadecimal
// console.log(parseInt("010"));  //10
// console.log(parseInt(" 90 "));  //90


//.......................................parseFloat().................................//
// console.log(parseFloat("10")); //10
// console.log(parseFloat("12.45")); //12.45
// console.log(parseFloat("years 12")); //NaN
// console.log(parseFloat("null")) //NaN
// console.log(parseFloat("undefined")); //NaN
// console.log(parseFloat(" 90 ")); //90
// console.log(parseFloat("10.00")); //10

//......................................isFinite()...................................//
//returns true if the number is finite else returns false
// console.log(Number.isFinite(2)) //true
// console.log(Number.isFinite(undefined)) //false
// console.log(Number.isFinite(null)) //false
// console.log(Number.isFinite("")) //false
// console.log(Number.isFinite(0)) //true
// console.log(Number.isFinite(0 / 0)) //false
// console.log(Number.isFinite(2 / 0)) //false
// console.log(Number.isFinite(4 / 2)) //true
// console.log(Number.isFinite(10 / NaN)) //false
// console.log(Number.isFinite(NaN / NaN)) //false
// console.log(Number.isFinite(NaN / 0)) //false

// => difference between Number and parseFloat is that parseFloat will return a number as soon as it encounters with a number bt Number will try to read the character after a number and returns NaN if cannot specify the character

// console.log(Number("3ex")); //NaN
// console.log(parseFloat("3ex")); //3

// console.log(Number('9,59 $')) // NaN
// console.log(parseFloat('9,59 $'))  //9

// => Number() converts binary octal and hexadecimal numbers to numbers whereas parseFloat() does not

// console.log(Number("0b101")); //5
// console.log(Number("0o110")); //72
// console.log(parseFloat("0b101")); //0
// console.log(parseFloat("0o110")); //0

// => Number() treats whitespaces as input and also parses input and return number and also number() takes booleans as number whereas parseFloat() will not parse whitespaces unless it contains numbers and will not even parse booleans

// console.log(Number("")); //0
// console.log(Number("\n")) //0
// console.log(Number("\n 120")); //120
// console.log(Number(true)); //1
// console.log(Number(false)); //0
// console.log(parseFloat("")); //NaN
// console.log(parseFloat("\n")) //NaN
// console.log(parseFloat("\n 120")); //120
// console.log(parseFloat(true)); //NaN
// console.log(parseFloat(false)); //NaN

//........................................toPrecision()............................//
//it returns a string representing a Number object
// console.log((0.002).toPrecision(4)); //0.002000
// console.log((1.002).toPrecision(4)); //1.002
// //0 before decimal is not consider as signinficant
// //This happens because in the first line we have only 3 significant digit after decimal and we want to precise till 4 significant digit hence 3 0's are added after 4
// //bt in the second line 1 is consider as significant hence we have already have 4 singinficant digits hence nothing will happen
// console.log((5.123466).toPrecision(3)); //5.12
//if we write null,undefined,empty string it will throw error


//.........................................toFixed()..............................//
// returns a string representing the given number with fixed notation
// console.log((12.45).toFixed(3)); //12.450
// console.log((5.129466).toFixed(3)); //5.129
// console.log((12.0002222).toFixed()); //12
// gives error for falsy values


//................................................Date()............................................//
// Date formates
// function getDateFormat(input) {
//     let date = new Date()
//     input=input.toUpperCase();
//     let dateObject = {
//         "YYYY-DD-MM": date.getFullYear() + "-" + date.getDate() + "-" + date.getMonth(),
//         "YYYY-MM-DD": date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
//         "YYYY/DD/MM": date.getFullYear() + "/" + date.getDate() + "/" + date.getMonth(),
//         "YYYY/MM/DD": date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate(),
//         "DD-MM-YYYY": date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
//         "MM-DD-YYYY": date.getMonth() + "-" + date.getDate() + "-" + date.getFullYear(),
//         "DD/MM/YYYY": date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
//         "MM/DD/YYYY": date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
//     };
//     return dateObject[input];
// }
// console.log(getDateFormat("YYYY-DD-MM"))
// console.log(getDateFormat("yyyy-mm-dd"))
// console.log(getDateFormat("mm/dd/yyyy"))


// gereral date function
// function gereralDateFunction(input, type) {
//     let date = new Date();
//     switch (type.toLowerCase()) {
//         case "months":
//             date.setMonth(date.getMonth() + input);
//             break;
//         case "years":
//             date.setFullYear(date.getFullYear() + input);
//             break;
//         case "days":
//             date.setDate(date.getDate() + input);
//             break;
//         case "weeks":
//             date.setDate(date.getDate() + input * 7);
//             break;
//         default:
//             return "Invalid";
//     }
//     return date;
// }
// console.log(gereralDateFunction(2, "Years"));
// console.log(gereralDateFunction(2,"months"));
// console.log(gereralDateFunction(2,"weeks"));
// console.log(gereralDateFunction(2,"days"));

//..................................................getUTC & getDate---------------------------------------//
// let date = new Date();
// console.log(date.getHours());
// console.log(date.getUTCHours());
// UTC returns the date and time according to the universal time zone whereas get returns the date and time of local time zone 