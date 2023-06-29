//push,unshift,pop,shift
// const languages=["HTML","CSS","JavaScript","C"];
// languages.length=8;
// languages[7];
// console.log(languages[7]);
// console.log(languages);
// languages.length=2;
// console.log(languages);
// console.log(languages.length); //simply gives length of array
// const arr=["HTML",1,2,{a:1,b:2},[5,6]];
// console.log(arr.length);
// languages.push({a:12,b:16},[1,2,3,{c:80}]);
// languages.unshift({a:12,b:16},[1,2,3,{c:80}]);
// console.log(languages);
// languages.unshift("HTML");
// languages.unshift("CSS");
// languages.unshift("C");
// console.log(languages);  //here the value of items is reset
// console.log(languages);
// console.log(languages);  //adds the new value at last of array
// languages.pop();
// console.log(languages)  //removes the last value of the array and returns the deleted value
// console.log(languages.pop());
// languages.shift();
// console.log(languages.shift())


// const obj={
//     lengt:6,
//     a:2,
//     b:5
// };
// Array.prototype.push.call(obj,1,2);
// console.log(obj);  //we can also call push on non-array objects


//at()
//we give index value and returns the item at that index .items can be fetched from start as well as from end 
//when we want to fetch item from end the index turns to length tht means it start from -1
// const languages=["HTML","CSS","JavaScript","C"];

// let index= 2;
// console.log(languages.at(index));

// function returnLast(arr){
//     return arr.at(-2);
// }
// let index=returnLast(languages);
// console.log(index);

//we can get the value at any index using three methods 1.at() 2.slice() 3.length syntax of all three are as below
// const languages=["HTML","CSS","JavaScript","C"];
// let index=languages[languages.length -1];
// console.log(index);
// const index=languages.slice(-2,-1);
// console.log(index);
// let index=languages.at(0);
// console.log(index);

//array.concat()
//this method combines any two or more values and returns new array
// let obj={a:{b:3,c:10,d:[10,20,30]}};
// let arr=[1,[2,3],4,[5]];
// let arr2=obj.concat(arr);
// console.log(arr2);

//every() it checks wheater every value of array is true with respect to the given condition it returns boolean value
// let checkValue=(currentValue)=>currentValue<20;
// const arr=[12,19,15,10];
// console.log(arr.every(checkValue));

// let checkValue=(arry1,arry2) => arry2.every((element)=>arry1.includes(element));
// console.log(checkValue([1,2,3,4],[5,2,1,4]));

//some() it checks wheather any one value is true or not with the given condition it returns boolean value
// let modulo=(element) => element%2==0;
// let arry=[1,2,3,4,[5]];
// console.log(arry.some(modulo));

//fill() it fills value in an array it has 3 paramters (value,start position, end position)
// const arr=[1,2,3,4];
// console.log(arr.fill(0,1,2)); //[1,0,3,4]
// console.log(arr.fill(0));  //[0,0,0,0]
// console.log(arr.fill(0,-2,-1)); //[1,2,0,4]
// console.log(arr.fill(0,NaN,NaN));//[1,2,3,4]
// console.log(arr.fill(0,1,0));//[1,2,3,4]
// console.log(arr.fill(0,0,1));//[0,2,3,4]
// console.log(arr.fill(0,1,-1));//[1,0,0,4]

//filter() filters the value according the provided condition 
// function value(element) {
//     return element>=10;
// }
// const arr=[10,20,3,5,7,100];
// console.log(arr.filter(value));

// const arr=[-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11];
// function isPrime(num){
//     if(num%2!=0){
//         return true;
//     }
//     return num>1;
// }
// console.log(arr.filter(isPrime));

//map()
//it maps all the element of an array and does the changes as per condition
// const arr=[1,2,5,6,8]
// const map=arr.map((x)=>x*2);
// console.log(map);
// const map=arr.map((x)=>x**2);
// console.log(map);

// let objKey={
//     fname:"Jeel",
//     lname:"Rajpara"
// }
// let map=objKey.map(({key:value})=>(({[key]:value})));
// console.log(map); 

//find() it finds the the first true value according to the condition
// let arr1=[1,29,88,99,100];
// function numberGreater(num){
//     return num>10;
// }
// let result=arr1.find(numberGreater);
// console.log(result);

// let arr1=[12,33,99,100];
// function numberLess(num){
//     return num<10;
// }
// let result=arr1.find(numberLess);
// console.log(result);  //it does not match the condition hence ans will be undefined

// let arr=[
//     {name:"Jeel",rollNo:12},
//     {name:"xyz",rollNo:14},
//     {name:"abc",rollNo:10}
// ];
// console.log(arr.find(({name})=>name=="Jeel"));

//findIndex() it returns the first index of the value that satifies the condition
// let arr=[12,13,14,100];
// function isGreater(num){
//     return num>10;
// }
// console.log(arr.findIndex(isGreater));

//forEach() it makes changes inside an array according to the value
// const arr=[1,,2,4,5];
// console.log(arr.forEach(function(value,index){
//     console.log(index+": "+value);
// }))

// const words=["item 1","item 2","item 3","item 4","item 5"]
// words.forEach(word => {
//     console.log(words);
//     if(word==="item 3"){
//         words.shift();
//     };
// });
// console.log(words);  //loop 3 times fari pachi ene word===item 3 vali condition mali etle ene condition satisfy kari

//is array checks if the array is array or not it have nothing to do with the value it jst sees if it is an array or not but returns false if the array is empty array
// const array=[{a:2},{b:3}];
// console.log(Array.isArray(array)); //true
// console.log(Array.isArray(new Array((1,2,3))));  //true
// console.log(Array.isArray((1,2,3)));  //false
// console.log(Array.isArray([]));//true
// console.log(Array.isArray({})); //false
// console.log(Array.isArray(1));//false

//join() method joins all the values inside an array and makes it string separated by commas space or anything
//it returns a string with all array 
// const arr=["item 1","item 2","item 3","item 4","item 5"];
// console.log(arr.join(" "));//item 1 item 2 item 3 item 4 item 5
// console.log(arr.join("-"));//item 1-item 2-item 3-item 4-item 5
// console.log(arr.join());//item 1,item 2,item 3,item 4,item 5

// const arr=[1,,3,4];
// arr.push([1,2,[4],3]);
// console.log(arr.join(";")); //1;;3;4;1,2,4,3

//flat() it creates a new array from the sub arrays upto a specific path we can mention upto how much we want to concate that array to new array
// let arr1=[1,2,3,[4,5],6];
// console.log(arr1.flat()); //[ 1, 2, 3, 4, 5, 6 ]

// let arr2=[1,2,3[[[4,5]]]];
// console.log(arr2.flat()); //doubt [ 1, 2, undefined ]

// let arr3 = [1, , 3, ["a", , ["d", , "e"]]];
// console.log(arr3.flat()); //[ 1, 3, 'a', [ 'd', <1 empty item>, 'e' ] ]
// console.log(arr3.flat(2)); //[ 1, 3, 'a', 'd', 'e' ]

//includes() defines wheather an array includes certain value among enteries or not it returns true or false
// console.log([1,2,3].includes(3)); //true
// console.log([1,2,3].includes(NaN)); //false
// console.log([1,2,3].includes(3,2)); //true
// console.log(["1","2","3"].includes(3)); //false
// console.log([1,2,3].includes(1,-100));//true

//reverse() it changes the direction of the elements and returns the reference of the original array
// let arr1=[1,2,3,4];
// console.log(arr1.reverse());//[4,3,2,1]

// let arr1=[1,,2,3,,4];
// console.log(arr1.reverse()); //[ 4, <1 empty item>, 3, 2, <1 empty item>, 1 ]

//splice() it adds new value from the specific position to a specific position 
//it includes three parameters (start index,delete count,values to add can add N number of values)
// let arr=["jan","feb","march","april","may"];
// arr.splice(1,0,"june");
// console.log(arr); //[ 'jan', 'june', 'feb', 'march', 'april', 'may' ]

// arr.splice(1,2,"june");
// console.log(arr);

// arr.splice(1,2,"june","july","august");
// console.log(arr); //[ 'jan', 'june', 'july', 'august', 'april', 'may' ]

// arr.splice(3,4,"june");
// console.log(arr); //[ 'jan', 'feb', 'march', 'june' ]

// arr.splice(NaN,2,"june"); 
// console.log(arr); //[ 'june', 'march', 'april', 'may' ]

// arr.splice(1,NaN,"june");
// console.log(arr); //[ 'jan', 'june', 'feb', 'march', 'april', 'may' ] NaN is considered as 0

// arr.splice(-1,-2,"june");
// console.log(arr); //[ 'jan', 'feb', 'march', 'april', 'june', 'may' ]

// const arr = [1, , 3, 4, , 6];
// arr.splice(1,3,9);
// console.log(arr); //[ 1, 9, <1 empty item>, 6 ]


//difference between filter() and find()
// let arr=[10,20,230,33,,66];
// function isGreater(num){
//     return num>20;
// }
// console.log(arr.find(isGreater)); //230
// console.log(arr.filter(isGreater)); //[ 230, 33, 66 ]
