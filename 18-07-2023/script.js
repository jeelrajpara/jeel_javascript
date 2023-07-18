// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [
//     { id: 10, name: 'xyz' },
//     { id: 5, name: 'xyz' },
//     { id: 2, name: 'something' },
//     { id: 50, name: 'abc' },
//     { id: 110, name: 'jcas' },
// ]
// //write a function displaying the id that is present in both arr1 and arr2
// function displayingId(arr1,arr2){
//     let result = arr2.filter((value)=>arr1.includes(value.id));
//     return result;
// }
// console.log(displayingId(arr1,arr2))

//write a function that only gives the name of the id that is present in the arr2 and arr1
// function displayingName(arr1,arr2){
//        let result = arr2.filter((value)=>arr1.includes(value.id)).map((value)=>value.name);
//        return result;
// }
// console.log(displayingName(arr1,arr2))

// write a function displaying the id that is not included in array 1
// function idNotPresent(arr1,arr2){
//     let result = arr2.reduce((accu,cur)=>{
//         if(!arr1.includes(cur.id)){
//             accu.push(cur)
//         }
//         return accu;
//     },[])
//     return result;
// }
// console.log(idNotPresent(arr1,arr2))

// remove duplicate id and print all the id's in one array
// function removeDuplicate(arr1, arr2) {
//     let combine = arr1.concat(arr2);
//     let result = combine.reduce((accu, cur) => {
//         if (!accu.find((item) => item.id === cur.id)) {
//             accu.push(cur);
//         }
//         return accu;
//     }, []);
//     return result;
// }
// console.log(removeDuplicate(arr1, arr2))  //doubt

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// function filterDuplicate(numbers) {
//     let result = numbers.reduce((accu, cur) => {
//         if (!accu.includes(cur)) {
//             accu.push(cur)
//         }
//         return accu;
//     }, [])
//     return result;
// }
// console.log(filterDuplicate(numbers)) //[ 1 , 2 , 3 , 4 , 5 ]

// const people = [
//     { name: 'Alice', age: 18 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 19 },
//     { name: 'David', age: 21 },
//     { name: 'Aryan', age: 21 }
// ];
// function findPeople(people){
//     let result = people.findIndex((value)=> value.name.includes('A') && value.age>20)
//     return result;
// }
// console.log(findPeople(people))

//--------------------------------------------scope------------------------------------------//
// let a = 3;
// function abc(){
//     a=6;
// }
// console.log(a) //3
// abc()
// console.log(a) //6

// let a = 'Hello';
// function abc() {
//     let b = "World";
//     console.log(a + b)
// }
// abc()
// console.log(a + b) //error ...b is local variable so cannot be accessed outside the function

// let a = "Hello";
// function abc() {
//     let b = 'World';
//     console.log(a + ' ' + b);
//     if (b === "World") {
//         let c = "heloo"
//         console.log(a + ' ' + b + ' ' + c);
//     }
//     console.log(a + '' + b + ' ' + c)
// }
// abc()

// var a = 4;
// function abc() {
//     console.log(a);
//     var a = 8;
// }
// abc()  //hoisting plays role and hence the output is undefined
// in memory allocation the variables are undefined first and then value is provided

// let friend = "Jennifer";
// function getFriend() {
//     console.log(friend);

//     let enemy = "Peter";
//     return function getEnemy() {
//         console.log(enemy);
//     };
// }
// getFriend();

// function findFriend() {
//     let name = "Timmy";
//     let friends = ["Kate", "Tom", "Harry"];
//     return friends;
// }

//   function findFamily() {
//     let name = "Peter";
//     let friends = ["Jimmy", "Jill", "Beth"];
//     return name;
// }
// console.log(findFamily())
// console.log(findFriend())

// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// foo();
// console.log(typeof a) //undefined
// console.log(typeof b) //number
//here b is accidently created as global variable and a is local variable

//-------------------------------------------------function--------------------------------------------//
// What is the syntax for declaring a JavaScript function called calculateSum that takes two parameters num1 and num2, and returns their sum?
// with argument and return type
// function addNum(num1,num2){
//     return num1 + num2;
// }
// console.log(addNum(10,12))

//with argument without return
// function addNum(num1,num2){
//     let sum = num1 + num2;
//     console.log(sum);
// }
// addNum(12,34)

//without argument with return
// function addNum(){
//     let a = 12;
//     let b = 34;
//     return a+b;
// }
// console.log(addNum())

//without argument and return
// function addNum() {
//     let a = 12;
//     let b = 34;
//     let sum = a + b;
//     console.log(sum);
// }
// addNum()

// Write a function that takes three parameters and returns the maximum number of three.(use ternary operator and if..else as well) (Also make all four types of function as we discussed in session)

// if..else (with argument and return)
// function maximumNum(num1, num2, num3) {
//     if (num2 > num1 && num1 > num3) {
//         return num1;
//     }
//     else if (num2 > num3) {
//         return num2;
//     }
//     else {
//         return num3;
//     }
// }
// console.log(maximumNum(1, 2, 3));

//ternary operator
// function maximumNum(num1,num2,num3){
//     return ((num1>num2)?((num1>num3)?num1:num3):((num2>num3)?num2:num3))
// }
// console.log(maximumNum(100,20,30))

//without argument with return
//if..else
// function maximumNum(){
//     let a = 12;
//     let b = 2;
//     let c = 33;
//     if(a>b && a>c){
//         return a;
//     }
//     else if(b>c){
//         return b;
//     }
//     else{
//         return c;
//     }
// }
// console.log(maximumNum())

//ternary
// function maximumNum(){
//     let a = 12;
//     let b = 2;
//     let c = 33;
//     return ((a>b)?((a>c)?a:c):((b>c)?b:c));
// }
// console.log(maximumNum())

//with argument and without return
// function maximumNum(num1,num2,num3){
//       if(num1>=num2 && num1>=num3){
//         console.log(num1);
//       }
//       else if (num2 >= num3) {
//         console.log(num2)
//       }
//       else {
//         console.log(num3);
//       }
// }
// maximumNum(10,20,30);

//ternary
// function maximumNum(num1,num2,num3){
//     console.log(((num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3)));
// }
// maximumNum(100,200,300);

//without argument and return
//if else
// function maximumNum(){
//      const num1=10;
//      const num2=100;
//      const num3=1000;
//      if(num1 >= num2 && num1 >= num3) {
//             return  num1;
//         }
//     else if ( num2 >= num3) {
//             return  num2;
//         }
//     else {
//             return  num3;
//     }
// }
// console.log(maximumNum());

//ternary
// function maximumNum(){
//     const num1=10;
//     const num2=100;
//     const num3=1000;
//     return max=((num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3));
// }
// console.log(maximumNum());