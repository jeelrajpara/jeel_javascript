//1.Write a code for returning the greeting message as per current time.
// var currentTime= new Date().getHours();
// if(currentTime<12){
//     console.log("Good Morning");
// }
// else if(currentTime<17){
//     console.log("Good Afternoon");
// }
// else if(currentTime<22){
//     console.log("Good evening") ;
// }
// else{
//     console.log("Good night") ;
// }



//2.Write a code for returning the day name based on the digit. (like 1 for monday and so on.)
// switch(new Date().getDay()){
//     case 0:
//     console.log("Sunday");
//     break;
//     case 1:
//     console.log("Monday");
//     break;
//     case 2:
//     console.log("Tuesday");
//     break;
//     case 3:
//     console.log("Wednesday");
//     break;
//     case 4:
//     console.log("Thursday");
//     case 5:
//     console.log("Friday");
//     case 6:
//     console.log("Saturday");
//     break;
// }
  
//3.Write a program that prints following pattern
// let string="";
// for(let i=1;i<=5;i++){
//    for(let j=1;j<=5;j++){
//      string+="*";
//    }
//    string+="\n";
// }
// console.log(string);

//4.Write a program that prints following pattern
// let string="";
// for(let i=1;i<=6;i++){
//     for(let j=1;j<i;j++){
//        string+="*";
//     }
//     string+="\n";
// }
// console.log(string);

//5.Write a program that prints following pattern
// let n=5;
// let string="";
// for(let i=0;i<=n;i++){
//     for(let j=0;j<n-i;j++){
//         string+="*";
//     }
//     string+="\n";
// }
// console.log(string);

//6.Write a program for returning the number of days in the particular month. 
//For example, getNumberOfDays(1); returns the 31 (1 stands for january)
// function getNumberOfDays(days){
//     let totalDays;
//     if(days == 1 || days==3 || days== 5 || days==7 || days==9 || days==11){
//          totalDays=31;
//     }
//     else if(days==2){
//         totalDays=28;
//     }
//     else{
//         totalDays=30;
//     }
//     return totalDays;
// }
// let number = getNumberOfDays(3);
// console.log("Total number of days =", number);


//7.Write a program that prints the 1 to 10.
// for(let i=1;i<=10;i++){
//     console.log(i);
// }
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// };
// let i=1;
// do{
//    console.log(i)
//    i++;
// }  while(i<=10)

//8.Write a function that prints the odd number of given range
//For example, printOddNumbers(1,10); prints 1,3,5,7,9
// function printOddNumbers(num1,num2){
//     let num="";
//     for(let i=num1;i<=num2;i++){
//         if(i%2!==0){
//             num+=i+",";
//         }
//     }
//     console.log(num.slice(0,num.length-1));
// }
// printOddNumbers(1,10);

// function printOddNumbers(num1, num2) {
//     let oddNumbers = [];
//     for (let i = num1; i <= num2; i++) {
//       if (i % 2 !== 0) {
//         oddNumbers.push(i);
//       }
//     }
//     console.log(oddNumbers.join(","));
//   }
  
//   printOddNumbers(1, 10);
  

//9.Write a function that prints the even number of given range
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


//Write a code that adds new key in each object named 
// full_name: first_name + last_name
// const names  = [
// {first_name: "Asndnm", last_name: "L demo"},
// {first_name: "Qpweui", last_name: "Alxezx"},
// {first_name: "Pqwern", last_name: "Ruse"},
// {first_name: "Wiruyn", last_name: "Ruby"},
// {first_name: "Erpso", last_name: "Loal"},
// {first_name: "Demors", last_name: "Poet"},
// {first_name: "Aleos", last_name: "Lkeu"},
// ]
// for(let name of names){
//     name.full_name=name.first_name + name.last_name;
// }
// console.log(names);

//10.Write a function that takes 3 arguments and returns the result based on the given operation. (operation will be sum, subtraction, multiplication, division, modulo)
//For example: calculate(‘+’, 5, 6); // 11
//calculate(‘-’, 10, 6); // 4
// function calculate(operation, num1, num2) {
//     switch (operation) {
//       case "+":
//         return num1 + num2;
//       case "-":
//         return num1 - num2;
//       case "*":
//         return num1 * num2;
//       case "/":
//         return num1 / num2;
//       case "%":
//         return num1 % num2;
//     }
//   }
// console.log(calculate("+",6,7));
// console.log(calculate("-",6,7));
// console.log(calculate("*",6,7));
// console.log(calculate("/",6,7));
// console.log(calculate("%",6,7));
  
//11.Write a function that takes marks as argument and returns the grade according to marks.
// let marks=75;
// switch(marks){
//     case(marks>=90 && marks<=100):console.log("Grade A+");
//     break;

//     case(marks>=75 && marks<=90):console.log("Grade A")
//     break;

//     case(marks>=65 && marks<=75 ):console.log("Grade B");
//     break;

//     default:console.log("Grade A+");
// } 

//12.Write a function that takes a currency_code and amount as an argument and 
//returns the amount of money in INR.
// function convertCurrencyCode(currency_code,amount){
//     let exchangeRates={
//         USD:82.03,
//         CAD:61.85,
//         EURO:89.40
//     };
//     let exchangeRate=exchangeRates[currency_code];
//     if(exchangeRate){
//         let inrRate=exchangeRate*amount;
//         console.log(inrRate);
//     };
// };
// convertCurrencyCode('EURO',100);

//13. Write a function for reversing the string.
// function reverseString(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello"));

//14.Write a function that takes an object and prints all keys and values in the console.
// function printObj(obj){
//     for(let keys in obj){
//         console.log(`Key: ${keys}, Value: ${obj[keys]}`);
//     };
// };
// let myObj={
//     name:"Jeel",
//     rollNo:119,
//     age:19,
// };
// printObj(myObj);

//15.Write a function that returns boolean on condition if the string contains a number or not.
//For example: isStringContainsNum(“assad”); // false
//isStringContainsNum(“agfh1”); // true
//isStringContainsNum(“ag1sdf”); // true
//isStringContainsNum(“111”); // true
// function isStringContainsNum(num){
//     for(let i=0;i<num.length;i++){
//     if(!isNaN (num[i])){
//         return true;
//     }
// }
//     return false;
// }
// console.log(isStringContainsNum("12uhw")); //true
// console.log(isStringContainsNum("hcuwehdi")); //false
// console.log(isStringContainsNum("12")); //true

//16. Write a function that prints messages based on condition if the string contains a number or not.
	//For example: For “1212” => string is number
    // For “sadfsd” => string not contains number
    // For “sad2q” => string contains number

    // function isStringContainsNum(num){
    //     for(let i=0;i<num.length;i++){
    //         if(!isNaN (num[i])){
    //             return "String contains a number";
    //         }
    //     }
    //     return "String does not contain a number";
    // };
    // console.log(isStringContainsNum("12uhw")); //String contains a number
    // console.log(isStringContainsNum("hcuwehdi")); //String does not contain a number
    // console.log(isStringContainsNum("12")); //String contains a number

//17.Write a function that returns the position of the first occurrence of digit in string.
// function digitPosition(str){
//     for(let i =0;i<str.length;i++){
//         let char=str.at(i);
//         if(char>=0 && char<=9){
//             return i;
//         }
//     }
//     return -1;
// }
// let position=digitPosition("Hello123");
// console.log(position);

//18. Write a function that returns the position of the first capital letter in string. (For this string only contains A-Z, a-z)
// function letterPosition(str){
//     for(let i =0;i<str.length;i++){
//         let charCode=str.charCodeAt(i);
//         if(charCode>=65 && charCode<=90){
//             return i;
//         }
//     }
//         return -1;
//     }
// let position=letterPosition("cskHjqwi3e2");
// console.log(position);

//19.
// function printOdd(start,end){
//     for(let i=start;i<=end;i++){
//         if(i%2!==0){
//             console.log(i)
//         }
//     }
//     return -1;
// }
// printOdd(1,10); //1,3,5,7,9

//20.
// function printOdd(start,end){
//     let count=0;
//     for(i=start;i<=end;i++){
//         if(i%2!==0){
//             console.log(i);
//             count ++;
//             if(count==10){
//                 break;
//             };
//         };
//     };
// };
// printOdd(1,310); //1,3,5,7,9,11,13,15,17,19


