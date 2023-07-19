// let arr1 = [{id:1,name:"hi"},{id:2,name:'hi'}];
// let arr2 = [
//     {id:1,name:'hi'},
//     {id:2,name:'hi'},
//     {id:3,name:'hi'}
// ]
//write a function such that the id which is not present in arr2
// function checkId(arr1,arr2){
//    let result = arr2.filter(value=>{
//      if(!arr1.some(item=>item.id===value.id)){
//         return value;
//      }
//    })
//    return result;
// }
// console.log(checkId(arr1,arr2)) // [ { id: 3, name: 'hi' } ]

// const nestedObject = {
//     name: "Vishal Kukreja",
//     age: 32,
//     address: {
//         street: "123 Mumbai fashion St",
//         city: "Midtown",
//         state: "MH",
//     },
//     hobbies: ["reading", "drawing", "gardening"],
// };
// function nestedObjectInLine(nestedObject) {
//     let value = Object.entries(nestedObject).map(([key, item]) => {
//         console.log(key + ":" + item)
//     })
//     return value;
// }
// console.log(nestedObjectInLine(nestedObject))

// let arr = [2, "11", 3, 0, 5, 7, 8, true, false]
// function getIntegers(arr) {
//     let result = arr.map(value => {
//         if (typeof value === 'number'  || typeof Number(value)==='number') {
//             return true;
//         }
//         else {
//             return false;
//         }
//     })
//     return result;
// }
// console.log(getIntegers(arr))

// Write a program to check if an array contains any number (strictly) or not.
// function isNumber(arr){
//     let result = arr.filter((value)=>typeof value==='number');
//     return result.length>0;
// }
// console.log(isNumber([1,2,3]))
// console.log(isNumber(["1",'a','h']))
// console.log(isNumber(["a",3,'h']))

