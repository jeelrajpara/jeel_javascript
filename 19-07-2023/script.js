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

// let arr1 = [1,230,322,45,90];
// arr1.every((value)=>value>34 && value<250);
// console.log(arr1);

// let arr1 = [1,2,3,4,5]
// let arr2 = arr1.fill(0,2,4)
// console.log(arr1)
// console.log(arr2)

// var arr = new Array(5);
// arr.fill(0);

// console.log(arr);

// var arr = [];
// arr.fill(10, 0, 5);

// console.log(arr);

// var arr = [1, 3, 5, 7];
// console.log(arr.slice(1));
// let arr;
// console.log(arr=arr.slice())

// var nums = [1, 2, 3];
// console.log(nums.map())

// function compare(a, b) {
//     if (a.year < b.year) return -1;
//     if (a.year > b.year) return 1;

//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0;
// }

// var langs = [
//     {name: 'JavaScript', year: 1995},
//     {name: 'Python', year: 1991},
//     {name: 'Java', year: 1995},
//     {name: 'C++', year: 1989}
// ];

// console.log(langs.sort(compare));

// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//     { name: "Product 8", price: 90, category: "xyz" },
// ];
// [a]
// function getCategory(products){
//     let result = products.reduce((accu,cur)=>{
//         let category = cur.category;
//         accu[category] = (accu[category]||0) + 1;
//         return accu;
//     },{})
//     return result;
// }
// products.push({ name: "Product 8", price: 90, category: "xyz" })
// console.log(getCategory(products));

// [b]
// function getAverage(products){
//     let result = [];
//         for (let product of products) {
//           let category = product.category;
//           let existingCategory = result.find(item => item.category === category);
    
//           if (existingCategory) {
//             existingCategory.totalPrice += product.price;
//             existingCategory.count++;
//           } else {
//             result.push({ category: category, totalPrice: product.price, count: 1 });
//           }
//         }
//         for (let categoryObj of result) {
//           categoryObj.average = categoryObj.totalPrice / categoryObj.count;
//           delete categoryObj.totalPrice;
//           delete categoryObj.count;
//         }
//         return result;
// }
// console.log(getAverage(products));
