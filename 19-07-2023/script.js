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

//------------------------------------------------Object------------------------------------------//
//1
// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target); // {b:2,a:1}
// console.log(source); //{a:1}

//2.
// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);
//23 23 undefined

//3.
// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);
// {a:44,b:45},{a:22,b:45},{a:44,b:45}

//4.
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj1); // {a:22,b:34}
// console.log(obj2); //{a:90,b:34}
// console.log(obj3); //{a:22,b:67}

//5.
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj1); //{a:22,b:67}
// console.log(obj2); // {a:90,b:34}
// console.log(obj3); // {a:22,b:34}

// 6.
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target); // {a:{b:1}}

//7.
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target); // {a:{b:1}}
// console.log(source); // {a:{b:2}}

// 8. 
// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source); //{a:1}
// console.log(target); // {}

//9.
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source); // false

// 10.
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });  //false

// 11.
// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(target) //{a:1,b:234}
// console.log(source); //{b:2}

// 12.
// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(target) //{a:1}
// console.log(source) //{a:2}
// console.log(result); // {a:1}

// 13.
// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source); //{a:{b:2}}
// console.log(target); //{a:{b:2}}
// console.log(result); //{a:{b:2}}

// 14.
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result); // {a:[2,3,4]}
// console.log(target); //{a:[2,3,4]}
// result.a[1]=1;
// console.log(result); //{ a: [ 2, 1, 4 ] }
// console.log(source); //{ a: [ 2, 1, 4 ] }
// console.log(target); //{ a: [ 2, 1, 4 ] }

//15.
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// target.a[2] = 90;
// console.log(result); //{a:[2,3,90]}

// 16.
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target); //{a:{b:d:3}}

// 17.
// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };
// function listObjectProperties(obj){
//     return Object.keys(obj)
// }
// console.log(listObjectProperties(student))

// 18.
// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };
// console.log(student.rollno) //12
// delete student.rollno;
// console.log(student.rollno) //undefined

// 19.
// function operationObj(obj) {
//   return  obj = { ...obj, c: 12 }
// }
// let a = { x: 34, y: 56 }
// operationObj(a);
// console.log(a); //{x:34,y:56}

// 20.
// function operationObj(obj) {
//     obj.z = { ...obj, c: 12 }
// }
// let a = {
//     x: 34,
//     y: 56
// }
// operationObj(a);
// console.log(a); //{x:34,y:56,z:{x:34,y:56,c:12}}

// 21.
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(source); //{a:{b:{d:3}}}

// 22.
// Make a function that works as Object.assign() without using the in-built method. (make only for 2 arguments only)
// function myObjectFunction(target,source){
//     for(let value in source){
//         target[value] = source[value];
//     }
//     return target;
// }
// let target = {a:1,b:2};
// let source = {b:3,c:4};
// let obj3 = myObjectFunction(target,source);
// console.log(obj3);
// console.log(myObjectFunction({ a: 1, b: 2 },{ b: 3, c: 4 }))

// 23.
// [a]
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1) //[{a:23,b:45,c:5}]
// console.log(obj1) //{a:23,b:45}

// [b]
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 30;
// console.log(arr1); //[{a:23,b:45,c:5}]
// console.log(arr2); //[{a:23,b:45,c:5}]
// console.log(obj1); //{a:23,b:45,c:{f:30}}

// [c]
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// obj1.c.f = 30;
// console.log(arr1); //[{a:23,b:45,c:{f:30}}]

// [d]
// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1); // [{a:23,b:45,c:5}]
// console.log(obj1); //{a:23,b:45}
// console.log(arr2); //[{a:23,b:45,c:5}]

// [e]
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], arr1);
// arr2[0].c = 5;
// console.log(arr1); // [ { a: 23, b: 45, c: 5 } ]
// console.log(obj1); //  { a : 23 , b:45 }
// console.log(arr2); // [ { a: 23, b: 45, c: 5 } ]

// [f]
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{...arr1[0]}]);
// arr2[0].c = 5;
// console.log(arr1); // [ { a : 23 , b : 45 } ]
// console.log(arr2); //[ { a: 23, b: 45, c: 5 } ]
// console.log(obj1); //{ a: 23, b: 45 }

// [g]
// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1, obj2, obj3);
// {a:34,b:56,c:{h:67,j:90}}
// {a:34,b:56,c:{h:67,j:90}}
// {a:34,b:56,c:{k:44}}

// Extra
// let obj1 = {a:34,b:45};
// let obj2 = {c:4,f:2};
// let obj3 = Object.assign(obj1,obj2).c=23;
// console.log(obj3); //23
// console.log(obj2); //{ c: 4, f: 2 }
// console.log(obj1); //{ a: 34, b: 45, c: 23, f: 2 }

// let obj1 = {a:34,b:45};
// let obj2 = {c:4,f:2};
// let obj3 = Object.assign(obj1,obj2.d=23);
// console.log(obj1); //{ a: 34, b: 45 }
// console.log(obj2); //{ c: 4, f: 2, d: 23 }
// console.log(obj3); //{ a: 34, b: 45 }

// let obj1 = {a:{b:1}};
// let obj2 = {c:{d:2}};
// let obj3 = Object.assign(obj1.c=23,obj2);
// console.log(obj1); //{ a: { b: 1 }, c: 23 }
// console.log(obj2); //{ c: { d: 34 } }
// console.log(obj3); //[Number: 23] { c: { d: 2 } }

//-------------------------------------------Array----------------------------------------//
// 43.
// Write a JavaScript program to check if an array is a factor chain or not.
// A factor chain is an array in which the previous element is a factor of the next    consecutive element. The following is a factor chain:
//  [2, 4, 8, 16, 32]
// // 2 is a factor of 4  // 4 is a factor of 8  // 8 is a factor of 16  // 16 is a factor of 32
// Test Data :
// ([2, 4, 8, 16, 32]) -> true          ([2, 4, 16, 32, 68]) -> false
// ([2, 4, 16, 32, 64]) -> true
// function isFactorChain(arr){
//     return arr.reduce((result,element,index)=>{
//         if(index>0){
//             if(element % arr[index-1]!==0){
//                 return false;
//             }
//         }
//         return result;
//     },true)
// }
// console.log(isFactorChain([2, 4, 8, 16, 32]))
// console.log(isFactorChain([2, 4, 16, 32, 68]))
// console.log(isFactorChain([2, 4, 16, 32, 64]))

// 42.
// Write a JavaScript program to find the maximum length of arrays inside a given array.
// Test Data :
// [2,8,[6],3,3,5,3,4,[5,4]] -> 2
// [2,8,[6,3,3],[4],5,[3,4,[5,4]]] -> 3
// [2,8,[6,3,3],[4],5,[3,4,[5,4]], [23,56]] -> 4
// [1,5,2,6,4,23,89] -> 0
// function findMaxLength(arr){
//     let max = 0;
//     arr.forEach((element)=>{
//         if(Array.isArray(element)&&max<element.length){
//             max=element.length;
//         }
//     })
//     return max;
// }
// console.log(findMaxLength( [2,8,[6],3,3,5,3,4,[5,4]])) //=>2
// console.log(findMaxLength([2,8,[6,3,3],[4],5,[3,4,[5,4]]])) //=>3
// console.log(findMaxLength([2,8,[6,3,3],[4],5,[3,4,[5,4]], [23,56]])) //=>3
// console.log(findMaxLength([1,5,2,6,4,23,89]))//=>0

// Write a JavaScript program to count the number of arrays inside a given array.
// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
// function countNumber(arr){
//     let count=0;
//     for(let i =0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             count++;
//         }
//         count+=countNumber(arr[i])
//     }
//     return count;
// }
// console.log(countNumber([2,8,[6],3,3,5,3,4,[5,4]]))

// Write a JavaScript function to find an array containing a specific element.
// Test data : (ONLY FOR STRING AND NUMBER)
// arr = [2, 5, 9, 6];
// contains(arr, 5); => True
// contains(arr, 10); => False
// function findElement(arr, element) {
//     for (let item of arr) {
//       if (item === element) {
//         return true;
//       }
//       if (Array.isArray(item) && findElement(item, element)) {
//         return true;
//       }
//     }
//     return false;
//   }
// console.log(findElement([2,5,6,9,[10]],10)) //=>true
// console.log(findElement([1,2,[3,4],[5],6],4)) //=>true
// console.log(findElement([1,2,3,4],5)) //=>false

// Write a JavaScript function to remove a specific element from an array.
// Test data :
// remove_array_element([2, 5, 9, 6], 5); => [2, 9, 6]
// function remove_array_element(element,removeElement){
//     return element.filter(value=>value!==removeElement)
// }
// console.log(remove_array_element([2, 5, 9, 6], 5))
// console.log(remove_array_element([1,2,3,4],4))

// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// Output: [1, 2, 3, 10, 100]
// function union(arr1,arr2){
//     let join = arr1.concat(arr2);
//     let result = join.reduce((accu,cur)=>{
//         if(!accu.includes(cur)){
//             accu.push(cur);
//         }
//         return accu;
//     },[]).sort((a,b)=>a-b)
//     return result;
// }
// console.log(union([1, 2, 3], [100, 2, 1, 10]))

// Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// Output: ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: ["3", "10", "100"]
// function difference(arr1,arr2){
// 	arr1=arr1.flat(Infinity);
// 	arr2=arr2.flat(Infinity);
// 	let array=[];
// 	arr1.filter(value=>{
// 		if(!arr2.includes(value)){
// 			array.push(String(value));
// 		}
// 	});
// 	arr2.filter(value=>{
// 		if(!arr1.includes(value)){
// 			array.push(String(value));
// 		}
// 	})
// 	return array.sort((a,b)=>a-b);
// }
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// remove duplicate value from string
// let arr = ["apple","banana","orange","Apple","lichie","strabbery"];
// function filterDuplicate(arr){
//     let array = [];
//     for(let i =0;i<arr.length;i++){
//         if(!array.includes(arr[i].toLowerCase())){
//             array.push(arr[i])
//         }
//     }
//     return array;
// }
// console.log(filterDuplicate(arr));

//remove duplicate value from array of objects
let arr = [
    { id: 1, name: 'fvsdv' },
    { id: 2, name: 'fcws' },
    { id: 3, name: 'dvdf' },
    { id: 4, name: 'fvfved' },
    { id: 1, name: 'fwcsd' },
    { id: 1, name: 'fws' },
    { id: 2, name: 'cvds' },
]
function filterObject(arr) {
    let array = [];
    arr.forEach((value) => {
        if (!array.find((element) => element.id === value.id)) {
            array.push(value);
        }
    })
    return array;
}
console.log(filterObject(arr))