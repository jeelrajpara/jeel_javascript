//1.
// let arr=[ 1 , 2 , 3 , 4 , 5 ];
// let power = arr.map( ( num ) => num ** num );
// console.log(power); //[ 1, 4, 27, 256, 3125 ]

//2.
// let obj=[
// {name:"abc",eid:101,age:19},
// { name:"xyz",eid:102,age:20},
// { name:"tey",eid:103,age:21}
// ];
// function callbackFn(obj){
//     return (obj.name.toUpperCase() + obj.eid + "" + obj.age);
// };
// let result=obj.map(callbackFn);
// console.log(result);

//3.
// let arr=[1,2,3,4,17,29,40];
// let result=arr.map((num)=>{
//     return num>=10;
// });
// console.log(result);
// //[
//     // false, false,
//     // false, false,
//     // true,  true,
//     // true
// //]

//4.
// let arr = [{}, {}, {}];
// let callBack = function (obj) {
//     obj.img="Something";
// }
// arr.map(callBack);
// console.log(arr);

//5.
// let arr=["xyz","abc","asd","uryu"];
// let result=arr.map((str)=>str.length);
// console.log(result);  //[3,3,3,4] //contains length of string

//6.
// let arr=[10,2,4,20,6,7,30];
// let result=arr.map(function(num){
//     if(num>=6){
//       return  num*5;
//     };
//     return num;
// });
// console.log(result); //[50,2,4,100,30,35,150]

//7.
// let obj=[
//     {name:"xyz",score:66},
//     {name:"abc",score:96},
//     {name:"XYZ",score:70},
//     {name:"ABC",score:80},
//     {name:"qwe",score:85},
// ];
// let result=obj.filter(student=>student.score>=80).map(student=>student.name);
// console.log(result); //[ 'abc', 'ABC', 'qwe']

//8.
// let arr=["apple","mango","banana"];
// let reversed=arr.map(function(str){
//     return str.split("").reverse().join("");
// });
// console.log(reversed); //[ 'elppa', 'ognam', 'ananab' ]

//9.
// let arr=["apple","mango","banana"];
// function capitalize(str){
//      return str.at(0).toUpperCase() +str.slice(1);
// }
// let result=arr.map(capitalize);
// console.log(result);

//10.
// let arr=[1,5,3,10,11];
// let result=arr.map((values,index)=>values+index);
// console.log(result); //[1,6,5,13,15] //values increased by its index

///11.
// let arr=[
//     {title:"something",author:"something2"},
//     {title:"something",author:"something2"},
//     {title:"something",author:"something2"},
//     {title:"something",author:"something2"},
//     {title:"something",author:"something2"},
// ];
// let result=arr.map((book)=>{
//     return `Title:${book.title} , Author:${book.author}}`
// }); 
// console.log(result);

//12.
// let arr=[1,4,9,16,25];
// let result=arr.map((num)=>Math.sqrt(num));
// console.log(result); //[1,2,3,4,5]

//13.
// let arr=[
//     {title:"something",author:"something2"},
//     {title:"something",author:"something2"},
//     {title:"something",author:"something2"},
//     {title:"something",author:"something2"},
//     {title:"something",author:"something2"},
// ];
// let result=arr.map(({title,author})=> ({[title]:author}));
// console.log(result);

//14.
// let arr=["1","2","3","4"];
// console.log(arr.map(Number)); //[ 1, 2, 3, 4 ]

//15.
// let arr = [1, 2, null, undefined, true, false];
// let result1 = arr.map((value) => {
//     if (value === null || value === undefined) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(result1);
// console.log(result1.length);
// let result2 = a.filter(value => {
//     if (value === true) {
//         return value;
//     }
// });
// console.log(result2);
// console.log(result2.length);

//15.
// let arr=[1,2,3,4,5,,null,undefined];
// let result=arr.map((num)=> num**2);
// console.log(result);  //[ 1, 4, 9, 16, 25, <1 empty item>, 0, NaN ]

//16.
// const users  = [
//     {first_name: "Handnm", last_name: "L demo", age: 17},
//     {first_name: "Q Wei", last_name: "Alxezx", age: 30},
//     {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
//     {first_name: "Widfruyn", last_name: "Ruby", age: 11},
//     {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
//     {first_name: "Dedfgmors", last_name: "Poet", age: 60},
//     {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
// ]
// let result=users.map((item)=>[item.first_name,item.last_name].join(" "));
// console.log(result);

//17.
// let arr=[1,5,3,10,11];
// let result=arr.map((values,index,array)=>values+array);
// console.log(result); 
// [
//   '11,5,3,10,11',
//   '51,5,3,10,11',
//   '31,5,3,10,11',
//   '101,5,3,10,11',
//   '111,5,3,10,11'
// ]

//18.
// let arr = [100, 20, 200, 76, 188, 99];
// let pop = function(values,index,array) {
//    return arr.pop();
// };
// let result = arr.map(pop);
// console.log(result); //[ 100, 20, 200, <3 empty items> ]

//19.
// const names  = [
//     [first_name= "Handnm", last_name= "L demo"],
//     [first_name= "Q Wei", last_name= "Alxezx"],
//     {first_name: "Pqwern", last_name: "Ruse"},
//     [first_name= "Wiruyn", last_name= "Ruby"],
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     [first_name= "Aleos", last_name= "Lkeu"],
// ];
// let result=names.map((item)=>{
//     if(names.first_name && names.last_name===Array.isArray()){
//         return [item.first_name,item.last_name].join(" ");
//     }
//     return names;
// });
// console.log(result);